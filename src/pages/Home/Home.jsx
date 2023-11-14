import { useContext } from "react";
import Encabezado from "../../components/Encabezado/Encabezado";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import { PizzaContext } from "../../context/PizzaContext";
import Container from "react-bootstrap/Container";
import "./Home.css";
const Home = () => {
  const { pizzas } = useContext(PizzaContext);
  return (
    <div>
      <Encabezado />
      <Container fluid className="containerPizzas">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            image={pizza.img}
            ingredients={pizza.ingredients}
          />
        ))}
      </Container>
    </div>
  );
};

export default Home;
