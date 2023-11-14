/* eslint-disable react/prop-types */
import "./PizzaItemCarrito.css";
const PizzaItemCarrito = (props) => {
  return (
    <div className="pizzaItemCarrito" key={props.key}>
      <div className="imgPizzaCarrito">
        <img src={props.img} alt="" height={"50px"} />
      </div>
      <div className="namePizzaCarrito">{props.name}</div>
      <div className="totalPizzaCarrito">{props.total}</div>
      <div className="btnDel">
        <button
          className="btn btn-danger"
          onClick={() => props.eliminar(props.id)}
        >
          -
        </button>
      </div>
      <div className="quantityPizzaCarrito">{props.quantity}</div>
      <div className="btnAdd">
        <button
          className="btn btn-primary"
          onClick={() => props.addToCard(props.id)}
        >
          +
        </button>
      </div>
      <div>
        <hr></hr>
      </div>
    </div>
  );
};

export default PizzaItemCarrito;
