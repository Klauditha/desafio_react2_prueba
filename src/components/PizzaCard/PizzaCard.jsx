/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./PizzaCard.css";
import { FaPizzaSlice } from "react-icons/fa";
import { FcViewDetails, FcPaid } from "react-icons/fc";
import { PatternFormat } from "react-number-format";

const PizzaCard = ({ id, name, price, image, ingredients }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="Uppercase">{name}</Card.Title>
        <Card.Text>
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
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border">
        <Card.Text>
          <div className="price" format="currency">
            <PatternFormat format="$ #.##0" value={price} displayType="text" />
          </div>
          <div className="botones">
            <Button variant="info" className="btn-md text-white">
              {" "}
              Ver más
              <FcViewDetails />
            </Button>
            <Button variant="danger">
              {" "}
              Añadir
              <FcPaid />
            </Button>
          </div>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default PizzaCard;
