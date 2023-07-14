import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [authState, setAuthState] = useState({
    token: null,
    authenticate: null,
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
  }, []);
  const UserLogin = async (email, password) => {
    try {
      const result = await axios.post(`http://192.168.0.107:3001/user/login`, {
        email,
        password,
      });
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
      return {
        msg: e.response.data.msg,
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
  };
  const authInfo = {
    UserLogin,
    UserLogOut,
    authState,
    data,
    setData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
