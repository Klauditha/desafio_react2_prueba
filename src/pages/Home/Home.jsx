import Encabezado from "../../components/Encabezado/Encabezado";
import PizzaCard from "../../components/PizzaCard/PizzaCard";

const Home = () => {
  return (
    <div>
      <Encabezado />
      <PizzaCard
        id="1"
        name="Pizza Margarita"
        price="10.00"
        image="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be"
        ingredients={["mozzarella", "tomates", "salame"]}
      />
    </div>
  );
};

export default Home;

/*
consumir con fetch o away
metodo reduce opara el carrito metodo de javascript
*/
