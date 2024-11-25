import { Route, BrowserRouter, Routes, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          
        </Routes>
      </HashRouter>
    </>
  );
}
