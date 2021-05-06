import axios from "axios";
import { createContext, useContext, useState } from "react";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState("");

  const loginUserWithCredentials = async (email, password) => {
    const {data} = await axios.post("https://satik-bazaar-api.herokuapp.com/users/signin", {
      "email": email,
      "password": password
    })
    const {success} = data;
    const {user: {_id : id}} = data;
    setIsUserLoggedIn(success);
    setCurrUser(id)
  }

  return (
    <authContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, loginUserWithCredentials, currUser }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
