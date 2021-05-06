import { createContext, useContext, useState } from "react";

export const RouteContext = createContext();

export function RouteProvider({ children }) {
  const [route, setRoute] = useState("home");
  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRoute() {
  return useContext(RouteContext);
}
