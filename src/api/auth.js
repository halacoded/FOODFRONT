import instance from ".";
import { storeToken, getToken, removeToken } from "./storage";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/users/signin", userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    storeToken(data.token);
    return data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

const register = async (userInfo) => {
  try {
    const { data } = await instance.post("/users/signup", userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    storeToken(data.token);
    return data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error;
  }
};

const logout = () => {
  removeToken();
};

const checkAuth = () => {
  const token = getToken();
  return !!token;
};

const getCurrentUser = async () => {
  try {
    const { data } = await instance.get("/users/me", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return data;
  } catch (error) {
    console.error(
      "Error fetching current user:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const updateProfile = async (userInfo) => {
  try {
    const { data } = await instance.put("/users/profile", userInfo, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.error(
      "Error updating profile:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export { login, register, logout, checkAuth, getCurrentUser, updateProfile };
