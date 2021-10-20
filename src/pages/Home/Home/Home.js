import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-12">
                        <h3>SERVICES AT ONE GLANCE</h3>
                        <p className='custom-border'></p>
                        <h1 className='display-2 fw-bold'>Haw can we</h1>
                        <h1 className='text-danger display-2 fw-bold'>Help you?</h1>
                        <p>Credibly innovate granular internal or “organic“ sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.</p>
                    </div>
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className='border border-5 p-5'>
                            <h5>CONTACT WITHIN MINUTES</h5>
                            <p className='custom-border'></p>
                            <h2 className='text-danger mt-4'>Contact our doctors</h2>
                            <p>Select the doctor you prefer to get a checkup and book a visit with them in a matter of minutes. Simply select from the list below.</p>
                            <Link to='/contact'>
                                <div className="btn btn-danger px-5 mt-4 text-white rounded-pill">Contact us</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container"> <hr /></div>

            <Services></Services>
        </div >
    );
};

export default Home;