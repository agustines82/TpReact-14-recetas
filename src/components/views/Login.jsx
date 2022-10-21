import { Container, Form, Row, Col, Button } from "react-bootstrap";
const Login = () => {
    return (
        <Container className="mainSection my-3">
            <Row className="justify-content-center">
                <Col sm={12} md={8} lg={5}>
                    <Form className="border rounded p-3 shadow ">
                        <Form.Group className="mb-3" controlId="formLoginEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLoginPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
