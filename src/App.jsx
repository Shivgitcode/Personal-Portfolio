import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import { useContext } from "react";
import { AppProvider } from "./context/AppProvider";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { display, handleCard } = useContext(AppProvider);

  return (
    <div className="w-screen h-screen box-border p-0 m-0 relative bg-[#191924] overflow-x-hidden scroll-smooth scrollbar  scrollbar-thumb-[#f2f3f4]/50  scrollbar-thumb-rounded-lg scrollbar-h-3 scrollbar-w-1 scroll-p-[80px]">
      <div className="w-full bg-[#191924] fixed z-30">
        <Navbar></Navbar>
      </div>
      <div className=" w-full pb-44">
        <Hero></Hero>
      </div>
      <div className="w-full bg-[#1C1C27] clip-path2 pb-44 bg-mygradient top-16 relative z-20">
        <Skills></Skills>
      </div>

      <div className="text-white bg-[#1C1C27] bg-mygradient relative w-full z-10  pb-[100px] clip-path3 min-h-screen top-10 pt-6">
        <Projects></Projects>
      </div>
      <div
        className={`${
          display ? "fixed w-screen h-screen bg-black/80 top-0 z-50" : "hidden"
        } `}
      >
        <ProjectDetails></ProjectDetails>
      </div>

      <div className="bg-[#1c1c27]  py-[36px] pb-[100px] relative -top-[26px]   w-full min-h-screen bg-mygradient clip-path2">
        <Education></Education>
        <Contact></Contact>
      </div>
      <div className="py-[32px]">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
