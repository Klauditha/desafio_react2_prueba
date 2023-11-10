import "./App.css";
import PizzaNavBar from "./components/NavBar/PizzaNavBar";
import PizzaRoutes from "./components/Routes/PizzaRoutes";
import { PizzaProvider } from "./context/PizzaProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <PizzaProvider>
      <PizzaNavBar/>
      <PizzaRoutes/>
    </PizzaProvider>
  );
}

export default App;
