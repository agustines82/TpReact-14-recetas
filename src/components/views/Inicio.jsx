import { Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./inicio.css";
const Inicio = () => {
    return (
        <main className="container mainSection">
            <h1 className="display-3 text-center">Bienvenidos</h1>
            <hr />
            <Row>
                <CardReceta />
            </Row>
        </main>
    );
};

export default Inicio;
