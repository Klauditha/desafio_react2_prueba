import Encabezado from "../../components/Encabezado/Encabezado";
import PizzaCard from "../../components/PizzaCard/PizzaCard";

const Home = () => {
  return (
    <div>
      <Encabezado />
      <PizzaCard id="1" name="Pizza Margarita" price="10.00" image="pizza-margarita.jpg"/>
    </div>
  );
};

export default Home;

/*
consumir con fetch o away
metodo reduce opara el carrito metodo de javascript
*/
