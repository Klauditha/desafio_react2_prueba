import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./PizzaNavBar.css";

const PizzaNavBar = () => {
  return (
    <Navbar bg="info" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black active" : "text-white"
            }
          >
            <img
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Pizzeria Mamma Mia
          </NavLink>
        </Navbar.Brand>
        <NavLink
          to="/carrito"
          className={({ isActive }) =>
            isActive ? "text-black active" : "text-white"
          }
        >
          🛒 <div id="totalCarrito"></div>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default PizzaNavBar;
