import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceItem = () => {
    const { serviceId } = useParams();
    return (
        <div className='text-center container my-5 py-5'>
            <h1>this is service item {serviceId}</h1>
            <Link to='/'>
                <button className='btn btn-outline-danger rounded-pill text-dark px-3 fw-bold'>Go To Home</button>
            </Link>
        </div>
    );
};

export default ServiceItem;