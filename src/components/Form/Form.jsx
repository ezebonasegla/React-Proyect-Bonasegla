import React from "react";
import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

export const FormExample = () => {
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        console.log(firstName);
        console.log(email);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre"
                        onChange={event => setFirstName(event.target.value)}
                        value={firstName}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Apellido"
                        onChange={event => setLastName(event.target.value)}
                        value={lastName}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Telefono"
                        onChange={event => setNumber(event.target.value)}
                        value={number}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" placeholder="Direccion" required onChange={event => setAddress(event.target.value)}
                        value={address} />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" placeholder="Ciudad" required />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom06">
                    <Form.Label>CP</Form.Label>
                    <Form.Control type="text" placeholder="CP" required />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} md="12" controlId="validationCustom07">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" required onChange={event => setEmail(event.target.value)}
                        value={email} />
                </Form.Group>
            </Row>
            <br></br>
            <Row>
                <Button type="sumbit" className="btn btn-success rounded-pill py-2 d-md-block">COMPRAR</Button>
            </Row>
        </Form>
    );
}