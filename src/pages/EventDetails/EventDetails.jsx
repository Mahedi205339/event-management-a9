import { useLoaderData, useParams } from "react-router-dom";
import { FaRegComment } from 'react-icons/fa';
import Swal from 'sweetalert2'
import { saveBookEvents } from "../../Utilities/localstorage";
const EventDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id)

    const handleBook =()=>{

        saveBookEvents(idInt)

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully Booked',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const events = useLoaderData()
    const event = events.find(event => event.id === idInt);

    const { title, background_img, description, price } = event

    return (
        <div className="max-w-7xl mx-auto flex flex-col  lg:grid lg:grid-cols-5 md:gap-10">
            <div className="col-span-3">
                <div className="card card-compact  bg-base-100">
                    <figure><img className="" src={background_img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl  font-semibold">{title}</h2>
                        <p className="text-xl font-bold">Price :<span className="text-xl md:text-2xl font-extrabold"> ${price}</span></p>

                        <p>{description}</p>
                        <button onClick={handleBook} className="px-2 py-1 btn bg-yellow-600 hover:text-yellow-600 text-white" >Book Now</button>
                    </div>

                </div>
            </div>
            <div className="  lg:col-span-2 w-full pl-3">
                <div>
                    <h2 className="text-xl my-3 md:text-2xl font-bold">Recent posts</h2>
                    <hr className="w-3/4 border-gray-400" />
                    <h3 className="text-gray-500 my-2">How to Start an Event Planning Service</h3>
                    <div className="flex gap-1 text-gray-500">
                        <p className="text-red-500">AUG 6 , 2023</p>
                        <p>| Admin |</p>
                        <div className="flex items-center gap-2">
                            <FaRegComment></FaRegComment>
                            <p> comments</p>
                        </div>
                    </div>
                </div>
                <div className="my-6">
                    <h3 className="text-gray-500 my-2">Turning a Profit in the Event Planning Business</h3>
                    <div className="flex gap-1 text-gray-500">
                        <p className="text-red-500">AUG 6 , 2023</p>
                        <p>| Admin |</p>
                        <div className="flex items-center gap-2">
                            <FaRegComment></FaRegComment>
                            <p> comments</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-500 my-2">How to Start an Event Planning Service</h3>
                    <div className="flex gap-1 text-gray-500">
                        <p className="text-red-500">AUG 6 , 2023</p>
                        <p>| Admin |</p>
                        <div className="flex items-center gap-2">
                            <FaRegComment></FaRegComment>
                            <p> comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;