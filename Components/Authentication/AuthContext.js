import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
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
        setAuthState({
          token: token,
          authenticate: true,
        });
      }
    };
    LoadToken();
  }, []);

  const UserLogin = (email, password) => {
    fetch(`http://192.168.0.107:3001/user/login`, {
      method: "POST",
      headers: {
        // Authorization: "Bearer admin-access",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then(async (i) => {
        setAuthState({
          token: i.token,
          authenticate: true,
        });
        await SecureStore.setItemAsync("user-token", i.token);
        await SecureStore.setItemAsync("signin-at", i.time);
      })
      .catch((error) => console.error(error));
  };
  const UserLogOut = async () => {
    await SecureStore.deleteItemAsync("user-token");
    setAuthState({
      token: null,
      authenticate: false,
    });
  };

  const authInfo = {
    UserLogin,
    UserLogOut,
    authState,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
