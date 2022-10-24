import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ItemReceta = () => {
    return (
        <>
            <tr>
                <td>id</td>
                <td>nombreReceta</td>
                <td>categoria</td>
                <td>imagen</td>
                <td>descripcion</td>
                <td>ingredientes</td>
                <td>preparacion</td>
                <td className="text-center">
                    <Link className="btn btn-outline-light me-1">
                        <i className="bi bi-arrow-clockwise text-warning"></i>
                    </Link>
                    <Button variant="outline-light">
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemReceta;
