import { BsChevronDoubleDown } from 'react-icons/bs';
import EventCard from '../EventCard/EventCard';

const Services = ({events}) => {
    
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="text-center ">
                <h2 className=' text-2xl md:text-3xl lg:text-4xl'>It is simple. You have an event to plan and <br />
                    we have <span className="text-yellow-600">The solutions</span>
                </h2>
                <BsChevronDoubleDown className="text-yellow-600 text-xl md:text-3xl w-full mx-auto my-2"></BsChevronDoubleDown>
                <p className='text-center text-gray-400 font-base mb-4 md:mb-6'> HERE IS HOW WE CAN HELP YOU</p>
            </div>
            <div className='grid grid-col-2 md:grid-col-2 lg:grid-cols-3  mx-auto gap-6'>
                {
                    events.map(event => <EventCard key={event.id} event={event}></EventCard>)
                }

            </div>
            
        </div>
    );
};

export default Services;