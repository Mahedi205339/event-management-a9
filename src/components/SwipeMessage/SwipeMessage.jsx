import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronDoubleDown } from 'react-icons/bs';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';

// import required modules
import { Autoplay } from 'swiper/modules';

const SwipeMessage = () => {



    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-full bg-yellow-500 h-96 text-center  flex justify-center items-center'>
                        <div className='text-white'>
                            <h2 className='my-4 md:my-6 lg:my-10 font-semibold text-xl md:text-2xl lg:text-3xl'>
                                Thank yo so much for the wonderful running our wedding <br />
                                celebration . It was a really flawless event . Thank you guys!
                            </h2>
                            <BsChevronDoubleDown className=" text-xl md:text-3xl w-full mx-auto my-2"></BsChevronDoubleDown>
                            <h5 className='uppercase'> Jessica and David Smith ,NewYork</h5>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full bg-yellow-500 h-96 flex justify-center items-center'>

                        <div className=' text-white'>
                            <h2 className='my-4 md:my-6 lg:my-10 font-semibold text-xl md:text-2xl lg:text-3xl'>
                                My grateful thanks to the entire team of the Event Management planning<br />
                                agency fot the superb organization of our conference.
                            </h2>
                            <BsChevronDoubleDown className=" text-xl md:text-3xl w-full mx-auto my-2"></BsChevronDoubleDown>
                            <h5 className='uppercase'> Antony ,Chicago </h5>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full bg-yellow-500 h-96 flex justify-center items-center'>
                        <div className='text-white'>
                            <h2 className='my-4 md:my-6 lg:my-10 font-semibold text-xl md:text-2xl lg:text-3xl'>
                                We would like to express our thanks to the staff for all their hand<br />
                                work and impressive professionalism in organizing our anniversary
                            </h2>
                            <BsChevronDoubleDown className=" text-xl md:text-3xl w-full mx-auto my-2"></BsChevronDoubleDown>
                            <h5 className='uppercase'> Jessica and David Smith ,NewYork</h5>
                        </div>

                    </div>
                </SwiperSlide>



            </Swiper>
        </>
    );
};

export default SwipeMessage;