import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { error, signInUsingGoogle, signInUsingGithub, loginWithEmail } = useAuth();

    const emailField = (e) => {
        console.log(e.target.value);
    }
    const passField = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className='container w-50 text-center py-5'>
            <div className="border p-4 ">
                <h1>Register</h1>
                <h5>Create an account</h5>
                <Form className='my-5 text-start'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control required type="email" placeholder=" name" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" onBlur={emailField} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" onBlur={passField} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-Enter Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" onBlur={passField} />
                    </Form.Group>


                </Form>
                <button onClick={loginWithEmail} className='btn btn-primary px-5 my-4'>Register</button>

                <p>Have an account ? <Link className='text-decoration-none' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;