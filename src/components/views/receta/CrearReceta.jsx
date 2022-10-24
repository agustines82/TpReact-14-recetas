import { Form, Button, Container } from "react-bootstrap";
const CrearReceta = () => {
    return (
        <>
            <Container className="mainSection">
                <section className="container my-3">
                    <h3 className="display-4">Nueva Receta</h3>
                    <hr />
                </section>
                <section className="container my-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="formNombre">
                            <Form.Label>Nombre receta*</Form.Label>
                            <Form.Control required type="text" placeholder="Ej:cafe" />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCategoria">
                            <Form.Select aria-label="Default select example">
                                <option value="">Seleccione una opción...</option>
                                <option value="Bebida caliente">Comidas principales</option>
                                <option value="Bebida fria">Desayunos / meriendas</option>
                                <option value="Dulce">Ensaladas</option>
                                <option value="Salado">Snacks</option>
                            </Form.Select>
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imagen URL*</Form.Label>
                            <Form.Control required type="text" placeholder="Ej:'https://....'" />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                            <Form.Label>Ingredientes</Form.Label>
                            <Form.Control as="textarea" rows={6} />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                            <Form.Label>Preparacion</Form.Label>
                            <Form.Control as="textarea" rows={6} />
                            <Form.Text className="text-danger">error</Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Form>
                </section>
            </Container>
        </>
    );
};

export default CrearReceta;
