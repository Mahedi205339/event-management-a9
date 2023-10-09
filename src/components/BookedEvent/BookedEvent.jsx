import PropTypes from 'prop-types';

const BookedEvent = ({event}) => {

    const { title, image, description } = event

    return (
        
        <div className="card card-compact w-96 bg-base-100">
            <figure><img className="w-96" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                {
                    description.length > 100 ? <p>{description.slice(0, 100)}<span>....</span> </p> : <p>{description}</p>
                }

                
            </div>
        </div>
    );
};

BookedEvent.propTypes = {
    event :PropTypes.array ,

  };

export default BookedEvent;