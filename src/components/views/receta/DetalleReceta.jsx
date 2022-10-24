import { Card, Badge } from "react-bootstrap";
const DetalleReceta = () => {
    return (
        <>
            <Card className="container border rounded my-3">
                <Card.Img
                    className="anchoFotoReceta"
                    variant="top"
                    src="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <Card.Body>
                    <div className="anchoDetalleReceta">
                        <Card.Title>receta.nombreReceta</Card.Title>
                        <hr />
                        <Badge bg="success">receta.categoria</Badge>
                        <Card.Text className="mt-3">receta.descripcion</Card.Text>
                        <Card.Text className="mt-3">receta.ingredientes</Card.Text>
                        <Card.Text className="mt-3">receta.ingredientes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default DetalleReceta;
