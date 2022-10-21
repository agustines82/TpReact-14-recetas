import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Registro = () => {
    return (
        <Container className="mainSection my-3">
            <section>
                <h1 className="display-3 text-center">Registro</h1>
                <hr />
            </section>
            <Form className="border rounded p-3 shadow">
                <Row>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formRegisterName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre" />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formRegisterLastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su apellido" />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formRegisterEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formRegisterPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <div className="text-center mt-2">
                    <Button variant="danger" type="submit">
                        Registrarse
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Registro;
