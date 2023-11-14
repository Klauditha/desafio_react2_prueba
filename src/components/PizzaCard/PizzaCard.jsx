/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./PizzaCard.css";
import { FaPizzaSlice } from "react-icons/fa";
import { FcViewDetails, FcPaid } from "react-icons/fc";
import { PatternFormat } from "react-number-format";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { PizzaContext } from "../../context/PizzaContext";

const PizzaCard = ({ id, name, price, image, ingredients }) => {
  const navigate = useNavigate();
  const { addToCard } = useContext(PizzaContext);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="Uppercase">{name}</Card.Title>
        <div className="card-title">
          <hr></hr>
          <h6>Ingredientes:</h6>
          <div className="ingredientes">
            {ingredients
              ? ingredients.map((ingredient, index) => (
                  <div className="itemIngredientes" key={index}>
                    <FaPizzaSlice />
                    {ingredient}
                  </div>
                ))
              : null}
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="bg-white border">
        <div className="price">
          <PatternFormat format="$ #.##0" value={price} displayType="text" />
        </div>
        <div className="botones">
          <Button
            variant="info"
            className="btn-md text-white"
            onClick={() => navigate(`/pizza/${id}`)}
          >
            {" "}
            Ver más
            <FcViewDetails />
          </Button>
          <Button
            variant="danger"
            id={"btnAdd" + id}
            onClick={() => addToCard(id)}
          >
            {" "}
            Añadir
            <FcPaid />
          </Button>
        </div>

      </Card.Footer>
    </Card>
  );
};

export default PizzaCard;
