import { Container } from "react-bootstrap";
import "./Carrito.css";
import { useContext } from "react";
import { PizzaContext } from "../../context/PizzaContext";
import PizzaItemCarrito from "../../components/PizzaItemCarrito/PizzaItemCarrito";

const Carrito = () => {
  const { pizzas, obtenerTotal } = useContext(PizzaContext);

  //document.getElementById("totalPedido").innerHTML = obtenerTotal() ? obtenerTotal() : 0;

  return (
    <div id="containerCarritoPage">
      <div id="tituloCarrito">Detalles del pedido:</div>
      <div id="itemsCarrito">
        {pizzas ?
          pizzas.map((pizza) => (
            <PizzaItemCarrito key={pizza.id} img={pizza.img} name={pizza.name} total={pizza.total} quantity={pizza.quantity}  />
          )) : (
            <div>No hay items en el carrito</div>
          )}
      </div>
      <div id="totalPedido"></div>
      <div>
        <button id="btnPagar" className="btn btn-success">
          Ir a Pagar
        </button>
      </div>
    </div>
  );
};

export default Carrito;
