import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import member1 from '../../assets/member1.png'
import member2 from '../../assets/member2.png'
import member3 from '../../assets/member3.png'
import member4 from '../../assets/member4.png'
import member5 from '../../assets/member5.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './staffswipe.css';

// import required modules
import { Autoplay } from 'swiper/modules';

const StaffSwipe = () => {
    return (
        <>
            <div className='mb-10'>
                <div className='my-4 md:my-10 text-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Our Staff</h1>
                    <BsChevronDoubleDown className="text-yellow-600 text-xl md:text-3xl w-full mx-auto my-2"></BsChevronDoubleDown>
                    <p className='uppercase text-gray-500'>Meet our best team</p>

                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <div>
                        <SwiperSlide>
                            <div >
                                <div className='w-52 h-52'>
                                    <img src={member1} alt="" />
                                </div>
                                <div className='my-4'>
                                    <h2 >Mark Aden </h2>
                                    <p className='text-gray-500'>Event Planner</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <div className='w-52 h-52'>
                                    <img src={member2} alt="" />
                                </div>
                                <div className='my-4'>
                                    <h2 >Jessica </h2>
                                    <p className='text-gray-500'>BANQUET MANAGER</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <div className='w-52 h-52'>
                                    <img src={member3} alt="" />
                                </div>
                                <div className='my-4'>
                                    <h2 > Alex Stane </h2>
                                    <p className='text-gray-500'>DIRECTOR</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <div className='w-52 h-52'>
                                    <img src={member4} alt="" />
                                </div>
                                <div className='my-4'>
                                    <h2 >David </h2>
                                    <p className='text-gray-500'>EVENT PLANNER</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <div className='w-52 h-52'>
                                    <img src={member5} alt="" />
                                </div>
                                <div className='my-4'>
                                    <h2 >Lawra Lore </h2>
                                    <p className='text-gray-500'>ASSIST. DIRECTOR</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>

                </Swiper>
            </div>
        </>
    );
};

export default StaffSwipe;