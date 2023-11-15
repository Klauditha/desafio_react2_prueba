import { useContext } from "react";
import { useParams } from "react-router";
import { PizzaContext } from "../../context/PizzaContext";
import { Container } from "react-bootstrap";
import { FaPizzaSlice } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { PatternFormat } from "react-number-format";
import { FcPaid } from "react-icons/fc";
import "./Pizza.css";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas, addToCart } = useContext(PizzaContext);
  const pizzaFiltrada = pizzas.filter((pizza) => pizza.id == id);
  const pizza = pizzaFiltrada[0];

  return (
    <Container className="containerPizza">
      {pizza.img ? (
        <div className="imagenPizza">
          <img src={pizza.img} alt={pizza.name} height={"380px"} />
        </div>
      ) : null}

      <div className="infoPizza">
        <h3 className="titlePizza">{pizza.name}</h3>
        <hr></hr>
        <div>{pizza.desc}</div>
        <h6 className="titleIngredientes">Ingredientes:</h6>
        <div className="ingredientes">
          {pizza.ingredients
            ? pizza.ingredients.map((ingredient, index) => (
                <div className="itemIngredientes" key={index}>
                  <FaPizzaSlice />
                  {ingredient}
                </div>
              ))
            : null}
        </div>
        <div className="precioAnadir">
          <div className="price">
            <label>Precio: </label>
            <PatternFormat
              format="$ #.##0"
              value={pizza.price}
              displayType="text"
            />
          </div>
          <div>
            {" "}
            <Button
              variant="danger"
              id={"btnAdd" + id}
              onClick={() => addToCart(id)}
            >
              {" "}
              Añadir
              <FcPaid />
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default Pizza;
