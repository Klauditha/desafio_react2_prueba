import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./PizzaNavBar.css";
import { FaCartPlus } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
const PizzaNavBar = () => {
  return (
    <Navbar bg="info" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue active" : "text-white"
            }
          >
            <div id="containerLogo">
              <div>
                <FaPizzaSlice id="iconPizza" />
              </div>
              <div> Pizzeria Mamma Mia </div>
            </div>
          </NavLink>
        </Navbar.Brand>
        <NavLink
          to="/carrito"
          id="linkCarrito"
          className={({ isActive }) =>
            isActive ? "text-blue active" : "text-white"
          }
        >
          <div id="containerCarrito">
            <FaCartPlus id="iconCart" />
            <div id="totalCarrito">0</div>
          </div>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default PizzaNavBar;
