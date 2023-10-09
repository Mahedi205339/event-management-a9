import { BsChevronDoubleDown } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';


const ContactUs = () => {
    return (
        <div>

            <div className='my-4 md:my-10 text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Contact Us</h1>
                <BsChevronDoubleDown className="text-yellow-600 text-xl md:text-3xl w-full mx-auto my-2"></BsChevronDoubleDown>
                <p className='uppercase text-gray-500'>Happy Clients About us</p>


            </div>
            <div className='max-w-6xl mx-auto border my-10  '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto'>
                    <div className='flex'>
                        <CiLocationOn className="text-5xl text-yellow-600"></CiLocationOn>
                        <div>
                            <h4 className="text-2xl">Postal Address</h4>
                            <p className='w-40 font-semibold text-gray-500'>Unica Event Agency 85 Fentiman Ave Ottawa, ON K1S 0T7</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <CiLocationOn className="text-5xl text-yellow-600"></CiLocationOn>
                        <div>
                            <h4 className="text-2xl">Postal Address</h4>
                            <p className='w-40 font-semibold text-gray-500'>Unica Event Agency 85 Fentiman Ave Ottawa, ON K1S 0T7</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <CiLocationOn className="text-5xl text-yellow-600"></CiLocationOn>
                        <div>
                            <h4 className="text-2xl">Postal Address</h4>
                            <p className='w-40 font-semibold text-gray-500'>Unica Event Agency 85 Fentiman Ave Ottawa, ON K1S 0T7</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <CiLocationOn className="text-5xl text-yellow-600"></CiLocationOn>
                        <div>
                            <h4 className="text-2xl">Postal Address</h4>
                            <p className='w-40 font-semibold text-gray-500'>Unica Event Agency 85 Fentiman Ave Ottawa, ON K1S 0T7</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    );
};

export default ContactUs