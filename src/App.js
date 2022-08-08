
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/home/Home";
import Program from "./pages/program/Program";
import Fadder from "./pages/fadder/Fadder";
import Faddergrupper from "./pages/faddergrupper/Faddergrupper";
import Info from "./pages/info/Info";
import Studentmesse from "./pages/studentmesse/Studentmesse";
import NotFound from "./pages/NotFound";

import { createContext } from "react";
import Fadderliste from "./pages/fadderliste/Fadderliste";

const major = {
  eiendom: {
    name: "Eiendomsmegling",
    color: "blue"
  },
  idrett: {
    name: "Idrett, trening og ledelse",
    color: "orange"
  },
  innovasjon: {
    name: "Innovasjon og entreprenørskap",
    color: "gold"
  },
  marked: {
    name: "Internasjonal markedsføring",
    color: "pink"
  },
  it: {
    name: "IT og Informasjonssystemer",
    color: "purple"
  },
  kultur: {
    name: "Kulturledelse",
    color: "red"
  },
  natur: {
    name: "Natur, miljø og friluftsliv",
    color: "green"
  },
  økonomi: {
    name: "Økonomi og ledelse",
    color: "lead"
  },
  international: {
    name: "International",
    color: "skin"
  },
}

export const MajorContext = createContext(major);

const App = () => {
  
  return (
    <>
    <Navigation/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="program" element={<Program/>} />
      <Route path="fadder" element={<Fadder/>} />
      <Route path="info" element={<Info/>} />
      <Route path="fadderliste" element={<Fadderliste/>} />
      <Route path="faddergrupper" element={<Faddergrupper/>} />
      <Route path="studentmesse" element={<Studentmesse/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
