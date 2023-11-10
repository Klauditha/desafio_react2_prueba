/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./PizzaCard.css";
import { FaPizzaSlice } from "react-icons/fa";

const PizzaCard = ({ id, name, price, image, ingredients }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <hr></hr>
          <h6>Ingredientes:</h6>
          <div className="ingredientes">
            {ingredients
              ? ingredients.map((ingredient, index) => (
                  <p className="itemIngredient" key={index}>
                    <FaPizzaSlice />
                    {ingredient}
                  </p>
                ))
              : null}
          </div>

          <h1>{price}</h1>
        </Card.Text>
        <div>
          <Button variant="primary">Go somewhere</Button>
          <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PizzaCard;
