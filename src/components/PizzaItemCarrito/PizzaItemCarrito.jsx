/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./PizzaItemCarrito.css";
import { PizzaContext } from "../../context/PizzaContext";

const PizzaItemCarrito = ({ id }) => {
  const { addToCart, pizzas, delToCart } = useContext(PizzaContext);
  const pizza = pizzas.filter((pizza) => pizza.id == id)[0];

  return (
    <>
      {pizza !== undefined ? (
        <div className="pizzaItemCarrito" key={pizza.id}>
          {pizza.img ? (
            <div className="imgPizzaCarrito">
              <img src={pizza.img} alt="" height={"60px"} />
            </div>
          ) : null}

          {pizza.name ? (
            <div className="namePizzaCarrito">{pizza.name}</div>
          ) : null}

          <div className="totalPizzaCarrito">{pizza.total}</div>
          <div className="btnDel">
            <button
              className="btn btn-danger"
              onClick={() => delToCart(pizza.id)}
            >
              -
            </button>
          </div>
          <div className="quantityPizzaCarrito">{pizza.quantity}</div>
          <div className="btnAdd">
            <button
              className="btn btn-primary"
              onClick={() => addToCart(pizza.id)}
            >
              +
            </button>
          </div>
          <div>
            <hr></hr>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PizzaItemCarrito;
