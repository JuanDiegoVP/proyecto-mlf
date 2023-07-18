import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./global/header/Header";
import RolAcondicionamiento from "./pages/rolAcondicionamiento/RolAcondicionamiento";
import Fractions from "./pages/fractions/fractions";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rols" element={<RolAcondicionamiento />} />
          <Route path="/fractions" element={<Fractions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
