import { useParams } from 'react-router';

const ServiceItem = () => {
    const { serviceId } = useParams();
    return (
        <div className='text-center container my-5 py-5'>
            <h1>this is service item {JSON.stringify(serviceId)}</h1>

        </div>
    );
};

export default ServiceItem;