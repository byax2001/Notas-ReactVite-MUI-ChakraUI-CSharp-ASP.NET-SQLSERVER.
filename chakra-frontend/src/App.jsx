import { Route, BrowserRouter, Routes, HashRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/home";
import "./App.css";


export default function App() {
  return (
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </HashRouter>
  );
}
