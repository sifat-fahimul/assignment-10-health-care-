import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, } from 'react-router-dom';  // useLocation, useHistory 
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { error, registerWithEmail } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [name, setName] = useState("");

    const emailField = (e) => {
        setEmail(e.target.value)
    }
    const passField = (e) => {
        setPassword(e.target.value)
    }
    const nameField = (e) => {
        // setName(e.target.value)
    }




    return (
        <div className='container w-50 text-center py-5'>
            <div className="border p-4 ">
                <h1>Register</h1>
                <h5>Create an account</h5>
                <p className='text-danger'>{error}</p>
                <Form className='my-5 text-start'>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control required type="text" placeholder=" name" onBlur={nameField} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" onBlur={emailField} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" onBlur={passField} />
                    </Form.Group>
                </Form>
                <button type="submit" onClick={() => { registerWithEmail(email, password) }} className='btn btn-primary px-5 my-4' >Register</button>

                <p>Have an account ? <Link className='text-decoration-none' to='/login'>Login</Link></p>
            </div>
        </div >
    );
};

export default Register;