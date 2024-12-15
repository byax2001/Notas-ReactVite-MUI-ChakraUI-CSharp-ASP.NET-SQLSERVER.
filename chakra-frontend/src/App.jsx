import { Route, BrowserRouter, Routes, HashRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import RegistrarAlumnos from "./pages/RegistrarAlumnos/RegistrarAlumnos";
import EditarAlumnos from "./pages/EditarAlumnos/EditarAlumnos";
import CalificarAlumnos from "./pages/CalificarAlumnos/CalificarAlumnos";
import "./App.css";



export default function App() {
  return (
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/regAl" element={<RegistrarAlumnos/>} />
          <Route path="/editAl/:idalumno" element={<EditarAlumnos/>} />
          <Route path="/calificar/:idmatricula" element={<CalificarAlumnos/>}/>
        </Routes>
      </HashRouter>
  );
}
