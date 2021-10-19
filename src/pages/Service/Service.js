import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { title, details, img, date, id } = service;
    return (
        <div className=''>
            <div className="">
                <div className="card rounded">
                    <img className="card-img-top" src={img} alt="" />
                    <div className="card-body">
                        {date}
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{details}</p>
                        <Link to={`/services/${id}`}> <button className="btn btn-danger  px-4 my-4 text-white rounded-pill">See more...</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;