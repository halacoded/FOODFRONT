import instance from ".";
import { storeToken } from "./storage";
const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/users/signin", userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
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
    throw error; // Re-throw the error so it can be handled by the component
  }
};

export { login, register };
