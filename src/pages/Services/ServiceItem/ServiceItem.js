import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceItem = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const [matchService, setMatchService] = useState({})

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        if (services.length > 0) {
            const matchData = services.find(service => service.id === serviceId);
            setMatchService(matchData);
        }
    }, [services])



    return (
        <div className='text-center container my-5 py-5'>
            <h2> {matchService?.title}</h2>
            <img className='w-75' src={matchService?.img} alt="" />
            <p>{matchService?.date}</p>
            <h3>Details : {matchService?.details}</h3>
            <Link to='/'>
                <button className='btn btn-outline-danger rounded-pill text-dark px-3 fw-bold'>Go To Home</button>
            </Link>
        </div>
    );
};

export default ServiceItem;