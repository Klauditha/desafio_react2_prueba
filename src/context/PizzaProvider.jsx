/* eslint-disable react/prop-types */
import { PizzaContext } from "./PizzaContext";
import { useState, useEffect } from "react";
export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const response = await fetch("pizzas.json");
    const data = await response.json();
    data.map((pizza) => {
      pizza.quantity = 0;
      pizza.total = 0;
    });
    setPizzas(data);
  };

  function currencyFormatter({ currency, value }) {
    const formatter = new Intl.NumberFormat("es-CL", {
      style: "currency",
      minimumFractionDigits: 0,
      currency,
    });
    return formatter.format(value);
  }
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
    let total = pizzas.reduce((a, b) => ({ total: a.total + b.total }));
    document.getElementById("totalCarrito").innerHTML = document.getElementById(
      "totalCarrito"
    ).innerHTML = total.total
      ? currencyFormatter({
          currency: "CLP",
          value: total.total,
        })
      : currencyFormatter({
          currency: "CLP",
          value: 0,
        });

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
