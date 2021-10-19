import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const backIcon = <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
    return (
        <div className='img-404'>
            <Link className='mb-4 text-decoration-none btn-bottom' to='/'>
                <button className='btn btn-danger rounded-pill text-white px-5 ms-2 '>{backIcon}  Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;