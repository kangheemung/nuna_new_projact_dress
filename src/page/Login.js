import React,{useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap'; // Removed redundant import for Container
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions/authenciateAction';

//＜Form＞를 사용할때에는 이벤트를 사용해주세요.페이지가 계속 리플래쉬 하는걸 막아줄수 있다.
//＜Form＞を使う時はEventをつかってください。
const Login = ({ setAuthenticate }) => {
    const [id,setId]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginUser = async (e) => {
        e.preventDefault();
        console.log('login user function issue');
        await dispatch(authenticateAction.login(id, password));
        setAuthenticate(true);
        navigate('/');
    };
    return (
        <div className="form_container">
            <Container className="d-flex justify-content-center">
                <Form className="form_size" onSubmit={(e) => loginUser(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setId(e.target.value)}/>
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
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
