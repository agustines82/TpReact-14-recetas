import { Col, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardReceta = () => {
    return (
        <Col className="my-3">
            <Card>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <Card.Img className="altoCardImageReceta" variant="top" src="{receta.imagen}" />
                    </Col>
                    <Col sm={12} md={8} lg={9}>
                        <Card.Body>
                            <Card.Title>receta.nombreReceta</Card.Title>
                            <Card.Text>
                                receta.descripcion Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis blanditiis
                                asperiores molestias velit, esse reprehenderit voluptatem sed? Cupiditate tempore neque accusantium quam
                                reprehenderit? Voluptatibus facilis, libero aliquid nihil ab nobis fuga maiores vitae. Ex, illum provident itatibus
                                dignissimos cupiditate ratione quam? Id ad libero vero. Id, at eos ullam accusamus recusandae
                            </Card.Text>
                            <hr />
                            <Link className="btn btn-dark">Ver mas</Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default CardReceta;
