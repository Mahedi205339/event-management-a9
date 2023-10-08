import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
    const {id} = useParams();
    const idInt = parseInt(id)

    const events = useLoaderData()
    const event = events.find(event => event.id === idInt);

    const { title, background_img, description} = event

    return (
        <div className="grid md:grid-col-4">
            <div className="col-span-3">
            <div className="card card-compact  bg-base-100">
            <figure><img className="" src={background_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
               <p>{description}</p>
            </div>
        </div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default EventDetails;