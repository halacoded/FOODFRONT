import React, { createContext, useState, useEffect } from "react";
import { checkToken } from "../api/storage";

const UserContext = createContext([false, () => {}]);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const tokenAvailable = checkToken();
    if (tokenAvailable) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
