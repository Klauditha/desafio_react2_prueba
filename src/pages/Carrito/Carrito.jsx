import "./Carrito.css";
import { useContext, useEffect } from "react";
import { PizzaContext } from "../../context/PizzaContext";
import PizzaItemCarrito from "../../components/PizzaItemCarrito/PizzaItemCarrito";

const Carrito = () => {
  const { pizzas, obtenerTotal } = useContext(PizzaContext);

  const setearTotal = () => {
    try {
      document.getElementById("totalPedido").innerHTML = obtenerTotal();
    } catch (error) {
      console.log(error);
      document.getElementById("totalPedido").innerHTML = 0;
    }
  };
  useEffect(() => {
    setearTotal();
  }, [pizzas]);

  return (
    <div id="containerCarritoPage">
      <div id="tituloCarrito">Detalles del pedido:</div>
      <div id="itemsCarrito">
        {pizzas ? (
          pizzas
            .filter((pizza) => pizza.quantity)
            .map((pizza) => <PizzaItemCarrito id={pizza.id} key={pizza.id} />)
        ) : (
          <div>No hay items en el carrito</div>
        )}
      </div>
      <div id="divTotalCarrito">
        <div>Total: </div>
        <div id="totalPedido"></div>
      </div>
      <div>
        <button id="btnPagar" className="btn btn-success">
          Ir a Pagar
        </button>
      </div>
    </div>
  );
};

export default Carrito;
