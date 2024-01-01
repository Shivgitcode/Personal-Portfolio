import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import { useContext } from "react";
import { AppProvider } from "./context/AppProvider";

function App() {
  const { display, handleCard } = useContext(AppProvider);

  return (
    <div className="w-screen h-screen box-border p-0 m-0 relative bg-[#191924] overflow-x-hidden">
      <div className="w-full bg-[#191924] fixed z-30">
        <Navbar></Navbar>
      </div>
      <div className=" w-full pb-44">
        <Hero></Hero>
      </div>
      <div className="w-full bg-[#1C1C27] clip-path2 pb-44 bg-mygradient relative z-20">
        <Skills></Skills>
      </div>

      <div className="text-white bg-[#1C1C27] bg-mygradient relative w-full z-10  pb-[100px] -top-5 clip-path3">
        <Projects></Projects>
      </div>
      <div
        className={`${
          display ? "fixed w-screen h-screen bg-black/80 top-0 z-50" : "hidden"
        } `}
      >
        <ProjectDetails></ProjectDetails>
      </div>
    </div>
  );
}

export default App;
