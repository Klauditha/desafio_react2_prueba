import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Carrito from "../../pages/Carrito/Carrito";
import Pizza from "../../pages/Pizza/Pizza";
import NotFound from "../../pages/NotFound/NotFound";

const PizzaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrito" element={<Carrito/>} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PizzaRoutes;
