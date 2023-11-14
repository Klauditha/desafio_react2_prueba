import { Container } from "react-bootstrap"
import "./Encabezado.css"
    
const Encabezado = () => {
  return (
    <Container fluid id="encabezado">
        <h3>¡Pizzería Mamma Mia!</h3>
        <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
        <hr></hr>
    </Container>
  )
}

export default Encabezado