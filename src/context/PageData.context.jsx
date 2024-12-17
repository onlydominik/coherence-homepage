import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const pageDataContext = createContext({
  isLoading: null,
  data: null,
  error: null,
});

export function PageDataContextProvider({ children }) {
  const { isLoading, data, error } = useFetch("/data.json");

  return (
    <pageDataContext.Provider value={{ isLoading, data, error }}>
      {children}
    </pageDataContext.Provider>
  );
}
