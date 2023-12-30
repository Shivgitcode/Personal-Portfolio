import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="w-screen h-screen box-border p-0 m-0 relative bg-[#191924]">
      <div className="w-full bg-[#191924] fixed z-30">
        <Navbar></Navbar>
      </div>
      <div className=" w-full">
        <Hero></Hero>
      </div>
    </div>
  );
}

export default App;
