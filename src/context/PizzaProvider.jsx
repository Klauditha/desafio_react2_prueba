/* eslint-disable react/prop-types */
import { PizzaContext } from "./PizzaContext";
import { useState, useEffect } from "react";
export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  /*
consumir con fetch o away
metodo reduce opara el carrito metodo de javascript
*/

  const getPizzas = async () => {
    const response = await fetch("pizzas.json");
    const data = await response.json();
    console.log(data);
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};
