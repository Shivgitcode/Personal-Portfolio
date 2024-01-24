import { useState } from "react";
import { createContext } from "react";
import { projects } from "../constants";

export const AppProvider = createContext();

export function AppProviderData({ children }) {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(false);
  const [index, setIndex] = useState(0);
  const project = projects;
  const [showDesc, setShowDesc] = useState(true);
  const [formdetails, setFormDetails] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  function handleCard(idx) {
    console.log(idx);
    setDisplay(!display);
    if (display === false && index !== idx) {
      setIndex(idx);
    } else {
      setIndex(0);
    }
  }
  // function handleIndex(idx) {
  //   console.log(idx);
  //   setIndex(idx);
  // }

  const value = {
    loading,
    setLoading,
    show,
    setShow,
    display,
    setDisplay,
    handleCard,
    project,
    setIndex,
    index,
    showDesc,
    setShowDesc,
    formdetails,
    setFormDetails,
  };

  return <AppProvider.Provider value={value}>{children}</AppProvider.Provider>;
}
