import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const clockIcon = <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    const callIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const arrowIcon = <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
    return (
        <div className='bg-light py-5'>
            <div className="container mt-5 " >
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <h1 className='display-5'>Health <span className='text-danger'>Care</span></h1>
                        <p className='custom-border'></p>
                        <p>Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. Dictum, placerat massa non, bibendum ante. Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh.</p>
                        <p>© sifat fahimul 2021</p>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12 text-center">
                        <h3>Contact us :</h3>
                        <p><span>{locationIcon}</span> 4321 Your Address, Country</p>
                        <p><span>{clockIcon}</span> Monday - Sunday 08:00 - 19:00 </p>
                        <p><span>{callIcon}</span> 00 11 223355</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 text-center">
                        <h3>Links :</h3>
                        <Link className='text-decoration-none text-dark ' to='/'><p>{arrowIcon} Home</p> </Link>
                        <Link className='text-decoration-none text-dark ' to='/service'><p>{arrowIcon} Service</p></Link>
                        <Link className='text-decoration-none text-dark ' to='/about'><p>{arrowIcon} About</p></Link>
                        <Link className='text-decoration-none text-dark ' to='/contact'><p>{arrowIcon} Contact</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;