import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-img'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-12 mt-5 pt-5 ">
                        <h1 className='display-2 fw-bold'>Your wealth,</h1>
                        <h1 className='text-danger display-2 fw-bold'>is your heath</h1>
                        <p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence.</p>
                        <Link to='/service'>
                            <button className='btn btn-danger px-4 mt-4 text-white rounded-pill'>Learn more</button>
                        </Link>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;