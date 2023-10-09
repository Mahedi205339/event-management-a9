import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookedEvents } from "../../Utilities/localstorage";
import BookedEvent from "../../components/BookedEvent/BookedEvent";
const Booked = () => {

    const [eventBooked, setEventBook] = useState([])


    const events = useLoaderData();
    useEffect(() => {
        const bookedEventsId = getStoredBookedEvents();
        if (events.length > 0) {
            const bookedEvents = [];
            for (const id of bookedEventsId) {
                const event = events.find(event => event.id === id)
                if (event) {
                    bookedEvents.push(event)
                }
            }
            setEventBook(bookedEvents);
        }
    }, [])

    return (
        <div className="h-[80vh]" >

            <h4>{eventBooked.length}</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
                {
                eventBooked.map(event => <BookedEvent event={event} key={event.id}></BookedEvent> )
            }
            </div>
            

        </div>

    );
};

export default Booked;