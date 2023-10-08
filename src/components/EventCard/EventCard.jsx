import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    const { title, image, description ,id} = event

    return (

        <div className="card card-compact  bg-base-100">
            <figure><img className="w-96" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                {
                    description.length > 100 ? <p>{description.slice(0, 100)}<span>....</span> </p> : <p>{description}</p>
                }

                <div className="card-actions justify-center">
                    <Link to={`/event/${id}`}> <button className="btn bg-yellow-600 text-white hover:text-yellow-600">Details</button></Link>
                </div>
            </div>
        </div>

    );
};

export default EventCard;