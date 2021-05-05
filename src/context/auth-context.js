import { createContext, useContext, useState } from "react";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  return (
    <authContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
