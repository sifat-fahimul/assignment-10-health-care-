import { faHospital } from '@fortawesome/free-regular-svg-icons';
import { faFileMedicalAlt, faPhoneAlt, faTty, faUserMd, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css'
import doc1 from '../../images/doc-1.jpg';
import doc2 from '../../images/doc-2.png';
import doc3 from '../../images/doc-3.jpg'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
const About = () => {
    const doctorIcon = <FontAwesomeIcon icon={faUserMd}></FontAwesomeIcon>
    const fileIcon = <FontAwesomeIcon icon={faFileMedicalAlt}></FontAwesomeIcon>
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const teliPhoneIcon = <FontAwesomeIcon icon={faTty}></FontAwesomeIcon>
    const nurseIcon = <FontAwesomeIcon icon={faUserNurse}></FontAwesomeIcon>
    const hospitalIcon = <FontAwesomeIcon icon={faHospital}></FontAwesomeIcon>
    const fbIcon = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
    const instaIcon = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    const twitterIcon = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>

    return (
        <div>
            <div className="container my-5 py-5">
                <h5>What we stand for</h5>
                <p className='custom-border'></p>
                <h4 className='display-6 fw-bold'>OUR VALUES</h4>
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="row">
                            <div className="col-3 mt-4">
                                <span className='about-circle fs-1 text-white' >{doctorIcon}</span>
                            </div>
                            <div className="col-9">
                                <h5>DOCTOR YOU CHOOSE</h5>
                                <p>Donec hendrerit rutrum nibh, id egestas magna sodales a. Fusce feugiat velit eu ante blandit facilisis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="row">
                            <div className="col-3 mt-4">
                                <span className='about-circle fs-1 text-white' >{fileIcon}</span>
                            </div>
                            <div className="col-9">
                                <h5>YOUR HEALTHCARE</h5>
                                <p>Vestibulum imperdiet vestibulum laoreet. Integer elementum euismod ante sit amet elementum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="row">
                            <div className="col-3 mt-4">
                                <span className='about-circle fs-1 text-white' >{phoneIcon}</span>
                            </div>
                            <div className="col-9">
                                <h5>ALWAYS THERE FOR YOU</h5>
                                <p> Mauris commodo lacinia nisi a fermentum. Donec risus magna, fringilla laoreet ullamcorper in, lobortis semper enim.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="row">
                            <div className="col-3 mt-4">
                                <span className='about-circle fs-1 text-white' >{nurseIcon}</span>
                            </div>
                            <div className="col-9">
                                <h5>NURSING STAFF</h5>
                                <p> Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="row">
                            <div className="col-3 mt-4">
                                <span className='about-circle fs-1 text-white' >{teliPhoneIcon}</span>
                            </div>
                            <div className="col-9">
                                <h5>EMERGENCY SERVICES</h5>
                                <p>Pellentesque sagittis neque neque, ac ultrices neque tempor a. In . tellus sollicitudin eu.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="row">
                            <div className="col-3 mt-4">
                                <span className='about-circle fs-1 text-white' >{hospitalIcon}</span>
                            </div>
                            <div className="col-9">
                                <h5>PREMIUM FACILITIES</h5>
                                <p>Donec porta tellus ac purus eleifend faucibus sit amet eu eros. Donec cursus laoreet felis, a cursus erat finibus sed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container ">
                <hr />
                <div className="text-center my-5">
                    <h5>Our Ma<span className='custom-border'>nageme</span>nt Team</h5>
                    <h4 className='display-6 fw-bold mt-3'>BOARD OF DIRECTORS</h4>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card rounded">
                                <img className="card-img-top" src={doc1} alt="" />
                                <div className="card-body">
                                    <p>Cosmetic Surgeon</p>
                                    <h5 className="card-title">Stephanie Wosniack</h5>
                                    <p className="card-text">Mauris fermentum tristique laoreet. Etiam sagittis erat quis cursus bibendum. Vestibulum elementum urna interdum velit dapibus, non faucibus sapien auctor. Nunc ullamcorper ultricies dignissim.</p>
                                </div>
                                <span className='text-danger fs-3'>{fbIcon} {instaIcon} {twitterIcon}</span>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card rounded">
                                <img className="card-img-top" src={doc2} alt="" />
                                <div className="card-body">
                                    <p>Pediatrician</p>
                                    <h5 className="card-title">Hellen Lowe</h5>
                                    <p className="card-text">Aliquam egestas, ipsum sed semper placerat, mauris ligula tempus ipsum, quis lacinia dui sem vitae purus. Quisque felis felis, facilisis eu maximus non, luctus ac dui.</p>
                                </div>
                                <span className='text-danger fs-3'>{fbIcon} {instaIcon} {twitterIcon}</span>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card rounded">
                                <img className="card-img-top" src={doc3} alt="" />
                                <div className="card-body">
                                    <p>Dental surgeon</p>
                                    <h5 className="card-title">Emily Washington</h5>
                                    <p className="card-text">Duis ac ultrices felis, quis volutpat ipsum. Aenean augue metus, suscipit non risus quis, malesuada suscipit urna. Nulla facilisi. Donec hendrerit rutrum nibh, id egestas magna sodales a.
                                    </p>
                                </div>
                                <span className='text-danger fs-3'>{fbIcon} {instaIcon} {twitterIcon}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;