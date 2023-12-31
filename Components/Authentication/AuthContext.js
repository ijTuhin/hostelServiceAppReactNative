import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { checkMealTime, today, meal } from "../Hooks/Conditions";
import { Linking } from "react-native";
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [authState, setAuthState] = useState({
    token: null,
    authenticate: null,
    refresh: "",
  });

  useEffect(() => {
    const LoadToken = async () => {
      const time = await SecureStore.getItemAsync("signin-at");
      const duration = (Date.now() - parseInt(time)) / 1000;
      if (duration >= 36000) {
        await SecureStore.deleteItemAsync("user-token");
      }
      const token = await SecureStore.getItemAsync("user-token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({
          token: token,
          authenticate: true,
        });
      }
      console.log("AuthContext-line-34:", time, token);
    };
    return () => LoadToken();
  }, [authState.refresh]);
  const getAllUserData = async () => {
    const result = await axios.get(`http://192.168.0.106:3001/user/my-data`);
    console.log("User :", result?.data?.payments);
    setData(result.data);
  };
  const getRefreshedData = () => {
    setRefreshing(true);
    getAllUserData();
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };
  const paySeatRent = async (value) => {
    try {
      const result = await axios
        .post(`http://192.168.0.106:3001/payment/seat-rent`, value)
        .then((item) => {
          console.log(item.data.url);
          Linking.openURL(item.data.url);
        });
      if (result) {
        setAuthState({
          ...authState,
          refresh: "seat-rent",
        });
      }
      console.log("AuthContext-Pay seat rent: ", result);
      return result;
    } catch (e) {
      return {
        msg: e.response.data.msg,
      };
    }
  };
  const payMealBill = async (value) => {
    try {
      const result = await axios
        .post(`http://192.168.0.106:3001/payment/meal-package`, value)
        .then((item) => {
          console.log(item.data.url);
          Linking.openURL(item.data.url);
        });
      if (result) {
        setAuthState({
          ...authState,
          refresh: "meal-bill",
        });
      }
      console.log("AuthContext-Pay meal bill: ", result, " ", value);
      return result;
    } catch (e) {
      return {
        msg: e.response.data.msg,
      };
    }
  };
  const placeMealOrder = async () => {
    try {
      const result = await axios.post(`http://192.168.0.106:3001/meal`, {
        meal: meal,
      });
      if (result) {
        setAuthState({
          ...authState,
          refresh: "place-order",
        });
      }
      console.log("AuthContext-Place meal order: ", result, meal);
      return result;
    } catch (e) {
      return {
        msg: e.response.data.msg,
      };
    }
  };
  const confirmMealReceive = async () => {
    try {
      let mealId;
      if (data.orders[0].meal === checkMealTime && !data.orders[0].status)
        mealId = data.orders[0]._id;
      else if (data.orders[1].meal === checkMealTime && !data.orders[1].status)
        mealId = data.orders[1]._id;
      const result = await axios.put(
        `http://192.168.0.106:3001/meal/${mealId}`
      );
      if (result) {
        setAuthState({
          ...authState,
          refresh: "confirm-meal",
        });
      }
      console.log("AuthContext-Confirmed meal receive: ", result, mealId);
      return result;
    } catch (e) {
      return {
        msg: e.response.data.msg,
      };
    }
  };
  const markAttendance = async () => {
    try {
      const result = await axios.post(`http://192.168.0.106:3001/attendance`, {
        date: new Date().getDate(),
      });
      if (result) {
        setAuthState({
          ...authState,
          refresh: "attendance-mark",
        });
      }
      console.log("AuthContext-Confirmed meal receive: ", result, today);
      return result;
    } catch (e) {
      return {
        msg: e.response.data.msg,
      };
    }
  };
  const postUserProblem = async (data) => {
    try {
      const result = await axios.post(
        `http://192.168.0.106:3001/message`,
        data
      );
      if (result) {
        setAuthState({
          ...authState,
          refresh: "post-issues",
        });
      }
      console.log("AuthContext- User Issue Post: ", result);
      return result;
    } catch (e) {
      return {
        msg: e.response.data.msg,
      };
    }
  };
  const postEditProfileRequest = async (data) => {
    try {
      const result = await axios.post(
        `http://192.168.0.106:3001/admin/edit-request`,
        data
      );
      if (result) {
        setAuthState({
          ...authState,
          refresh: "edit-request",
        });
        console.log("Edit request Done 171");
      }
      console.log("AuthContext- User Info Edit Request: ", result, data);
      return result;
    } catch (e) {
      return {
        msg: e.response.data.msg,
      };
    }
  };
  const UserLogin = async (email) => {
    console.log(email);
    try {
      console.log("User Login", email);
      const result = await axios.post(`http://192.168.0.106:3001/user/login`, {
        email,
      });
      console.log("try");
      if (result?.data?.token) setLoading(false);
      setAuthState({
        token: result.data.token,
        authenticate: true,
      });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.token}`;
      await SecureStore.setItemAsync("user-token", result.data.token);
      await SecureStore.setItemAsync("signin-at", result.data.time);
      return result;
    } catch (e) {
      console.log("catch");
      return {
        msg: e,
      };
    }
  };
  const UserLogOut = async () => {
    await SecureStore.deleteItemAsync("user-token");
    await SecureStore.deleteItemAsync("signin-at");
    axios.defaults.headers.common["Authorization"] = ``;
    setAuthState({
      token: null,
      authenticate: false,
    });
    if (authState?.token) setLoading(false);
  };
  const authInfo = {
    UserLogin,
    UserLogOut,
    payMealBill,
    paySeatRent,
    placeMealOrder,
    postUserProblem,
    postEditProfileRequest,
    confirmMealReceive,
    markAttendance,
    setData,
    getAllUserData,
    setLoading,
    getRefreshedData,
    refreshing,
    loading,
    data,
    authState,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
