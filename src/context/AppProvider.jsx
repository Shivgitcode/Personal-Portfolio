import { useState } from "react";
import { createContext } from "react";

export const AppProvider = createContext();

export function AppProviderData({ children }) {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  const value = {
    loading,
    setLoading,
    show,
    setShow,
  };

  return <AppProvider.Provider value={value}>{children}</AppProvider.Provider>;
}
