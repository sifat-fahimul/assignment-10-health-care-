import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const googleIcon = <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
    const githubIcon = <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
    const { error, setError, signInUsingGoogle, signInUsingGithub, loginWithEmail } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleLoginGit = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const emailField = (e) => {
        setEmail(e.target.value)
    }
    const passField = (e) => {
        setPassword(e.target.value)
    }
    const handleLoginEmail = () => {
        loginWithEmail(email, password)
        history.push('/')

    }

    return (
        <div className='container text-center py-5  w-50'>
            <div className="border p-4 ">
                <h1>Login</h1>
                <h5>Login into your pages account</h5>
                <p className='text-danger'>{error}</p>
                <Form className='my-5 text-start'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" onBlur={emailField} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" onBlur={passField} />
                    </Form.Group>


                </Form>
                <button onClick={handleLoginEmail} className='btn btn-primary px-5 my-4'>Login</button><br />
                <p className=' text-muted'> ----------  Or Login With Email  ----------</p>
                <button className='bg-success text-white fw-bold px-4 py-2 mx-3 rounded' onClick={handleLogin}> <span>{googleIcon}</span> Google+</button>
                <button className='bg-secondary mx-3 text-white fw-bold px-4 py-2 rounded mb-4' onClick={handleLoginGit}> <span>{githubIcon}</span> Github</button>
                <p>Don't have an account ? <Link className='text-decoration-none' to='/register'>Register</Link></p>
            </div>

        </div>
    );
};

export default Login;