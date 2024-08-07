import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'; // Removed redundant import for Container
// import { Container } from '@material-ui/core'; // Remove or rename this line since it's already imported above

const Login = () => {
    return (
        <div className="form_container">
            <Container>
                <Form className="form_size">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button
                        variant="outline-success"
                        type="submit"
                        className="form_button d-flex justify-content-center">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;
