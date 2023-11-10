import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Carrito from "../../pages/Carrito/Carrito";
import Pizza from "../../pages/Pizza/Pizza";

const PizzaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrito" element={<Carrito/>} />
      <Route path="/pizza:id" element={<Pizza />} />
    </Routes>
  );
};

export default PizzaRoutes;
