import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"

const Banner = () => {
    return (


        <div className="carousel w-full md:h-[500px] lg:h-[900px]">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero lg:h-[800px]" style={{ backgroundImage: `url(${banner1})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-left text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">
                               <span className="text-yellow-600"> We can create</span>
                                <br /> you <br /> celebrate
                            </h1>
                            <p className="mb-5">
                                Planning a Wedding.Proposal , or Event in our busy city is not so easy. <br />
                                and it takes skills and time to make it look easy-going
                            </p>

                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="text-white text-2xl md:text-3xl lg:text-5xl">❮</a>
                    <a href="#slide2" className="text-white text-2xl md:text-3xl lg:text-5xl">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero lg:h-[800px]" style={{ backgroundImage: `url(${banner2})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">
                                <span className="text-yellow-600">From set up</span> 
                                <br />
                                to <br />
                                clean up
                            </h1>
                            <p className="mb-5">
                                Planning a Wedding.Proposal , or Event in our busy city is not so easy. <br />
                                and it takes skills and time to make it look easy-going
                            </p>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-white text-2xl md:text-3xl lg:text-5xl">❮</a>
                    <a href="#slide3" className="text-white text-2xl md:text-3xl lg:text-5xl">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero lg:h-[800px]" style={{ backgroundImage: `url(${banner3})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">
                                <span className="text-yellow-600">Lets us help </span>
                                <br />
                                You <br />
                                create
                            </h1>
                            <p className="mb-5">
                                Planning a Wedding.Proposal , or Event in our busy city is not so easy. <br />
                                and it takes skills and time to make it look easy-going
                            </p>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-white text-2xl md:text-3xl lg:text-5xl">❮</a>
                    <a href="#slide4" className="text-white text-2xl md:text-3xl lg:text-5xl">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero lg:h-[800px]" style={{ backgroundImage: `url(${banner4})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-left text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">
                               <span className="text-yellow-600"> Our good wishes</span>
                                 <br />
                                Always <br />
                                with you
                            </h1>
                            <p className="mb-5">
                                Planning a Wedding.Proposal , or Event in our busy city is not so easy. <br />
                                and it takes skills and time to make it look easy-going
                            </p>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="text-white text-2xl md:text-3xl lg:text-5xl">❮</a>
                    <a href="#slide1" className="text-white text-2xl md:text-3xl lg:text-5xl">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;