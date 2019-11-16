import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Form, Container, Row, Col } from 'reactstrap';

export class SignUp extends Component {

    render() {
        return (
            <div>
                <div class="text-center">
                    <h5>Create YouTask Account</h5>
                    <hr/>
                </div>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Form>
                                <div>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>@</InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="E-Mail" type="email" />
                                    </InputGroup>
                                </div>
                                <br />
                                <div>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>**</InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Password" type="password" />
                                    </InputGroup>
                                </div>
                                <br/>
                                <div>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>**</InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Confirm your password" type="password" />
                                    </InputGroup>
                                </div>
                                <br />
                                <div class="text-center">
                                    <Button color="success" type="submit" size="sm">Create Account</Button>{' '}
                                    <Button color="secondary" type="reset" size="sm">Reset</Button>{' '}
                                    <Button color="primary" type="submit" size="sm">Login with <i class="fab fa-facebook-f"></i>acebook</Button>{' '}
                                    <Button color="warning" type="submit" size="sm">Login with <i class="fab fa-google"></i>oogle</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}