import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import loginimg from '../image/loginimg.jpg';
import '../pages/Bookingpage.css';
const Bookingpage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="contact-header">Book Us </h1>
                    <p className="contact-description">
                       Why late? Book your desired flight now!
                    </p>
                    <div className="contact-form">
                        <div className="contact-form-left">
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Control
                                        type="number"
                                        placeholder="Phone"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Adress"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                ></Form.Group>
                                <div className="form-btn">
                                    <Button>Book Now</Button>
                                </div>
                            </Form>
                        </div>
                        <div className="contact-form-right">
                            <img src={loginimg} alt="" />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Bookingpage;
