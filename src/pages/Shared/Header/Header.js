import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">Health Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <NavHashLink className='text-success fw-bold mx-3 text-decoration-none' to="/home">Home</NavHashLink>
                        <NavHashLink className='text-success fw-bold mx-3 text-decoration-none' to="/service">Service</NavHashLink>
                        <NavHashLink className='text-success fw-bold mx-3 text-decoration-none' to="/about">About</NavHashLink>
                        <NavHashLink className='text-success fw-bold mx-3 text-decoration-none' to="/contact">Contact</NavHashLink>
                        <Navbar.Text>
                            <span className='text-white'><span className='text-danger mx-2'>{userIcon}</span> {user.displayName}</span>
                        </Navbar.Text>
                        {user.email ? <button onClick={logOut} className='btn btn-danger rounded-pill text-white px-4 ms-2'>Log Out</button> : <div>
                            <Link to='/login'>
                                <button className='btn btn-outline-danger rounded-pill text-white px-4 ms-2'>Login</button>
                            </Link>
                            <Link to='/register'>
                                <button className='btn btn-danger rounded-pill text-white px-4 ms-2'>Signup</button>
                            </Link>
                        </div>}


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;