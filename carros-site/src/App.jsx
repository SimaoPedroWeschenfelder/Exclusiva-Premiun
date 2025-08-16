import { Routes, Route } from "react-router-dom";
import CarList from "./components/CarList";
import CarDetail from "../src/pages/CarDetails";
import Navbar from "./components/Navbar";
import Zapbutton from "./components/WhatsAppButton";
import Home from "./pages/Home"; // ajuste o caminho conforme sua estrutura

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<CarList />} />
        <Route path="/carro/:id" element={<CarDetail />} />
        <Route path="/carros" element={<CarList />} />
      </Routes>
      <Zapbutton />
    </>
  );
}

export default App;
