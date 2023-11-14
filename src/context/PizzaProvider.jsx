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
    //console.log(data);
    setPizzas(data);
  };

  const addToCard = (id) => {
    try {
      document.getElementById("btnAdd" + id).disabled = true;
      let items = pizzas.map((pizza) => {
        if (pizza.id === id) {
          pizza.quantity = pizza.quantity ? pizza.quantity + 1 : 1;
          pizza.total = pizza.price * pizza.quantity;
          return pizza;
        } else {
          return pizza;
        }
      });
      setPizzas(items);
      alert("Agregado al carrito");
    } catch (error) {
      alert("Error al carrito");
    }
    console.log(pizzas);
    document.getElementById("btnAdd" + id).disabled = false;
  };
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, addToCard }}>
      {children}
    </PizzaContext.Provider>
  );
};
