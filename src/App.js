
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/home/Home";
import Program from "./pages/program/Program";

const App = () => {
  
  return (
    <>
    <Navigation/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="program" element={<Program/>} />
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
