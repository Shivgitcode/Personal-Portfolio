import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="w-screen h-screen box-border p-0 m-0 relative bg-[#191924] overflow-x-hidden">
      <div className="w-full bg-[#191924] fixed z-30">
        <Navbar></Navbar>
      </div>
      <div className=" w-full pb-44">
        <Hero></Hero>
      </div>
      <div className="w-full bg-[#1C1C27]">
        <Skills></Skills>
      </div>
    </div>
  );
}

export default App;
