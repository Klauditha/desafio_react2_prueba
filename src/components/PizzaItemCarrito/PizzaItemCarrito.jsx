/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./PizzaItemCarrito.css";
import { PizzaContext } from "../../context/PizzaContext";
import { PatternFormat } from "react-number-format";

const PizzaItemCarrito = ({ id }) => {
  const { addToCart, pizzas, delToCart } = useContext(PizzaContext);
  const pizza = pizzas.filter((pizza) => pizza.id == id)[0];

  const validacionAgregar = (id) => {
    alertify
      .confirm(
        "¿Está seguro de agregar un nuevo item al carrito?",
        function () {
          addToCart(id, true);
        },
        function () {
          alertify.error("Operación cancelada");
        }
      )
      .set({ labels: { ok: "Si", cancel: "No" } }, { title: "¡Atención!" });
  };

  const validacionEliminar = (id) => {
    alertify
      .confirm(
        "¿Está seguro de eliminar item del carrito?",
        function () {
          delToCart(id);
        },
        function () {
          alertify.error("Operación cancelada");
        }
      )
      .set({ title: "¡Atención!" }, { labels: { ok: "Si", cancel: "No" } });
  };
  return (
    <div className="containerPizzaCarrito">
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

          <div className="totalPizzaCarrito">
            <PatternFormat
              format="$ #.##0"
              value={pizza.total}
              displayType="text"
            />
          </div>
          <div className="btnDel">
            <button
              className="btn btn-danger"
              onClick={() => validacionEliminar(pizza.id)}
            >
              -
            </button>
          </div>
          <div className="quantityPizzaCarrito">{pizza.quantity}</div>
          <div className="btnAdd">
            <button
              className="btn btn-primary"
              onClick={() => validacionAgregar(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PizzaItemCarrito;
