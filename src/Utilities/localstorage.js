const getStoredBookedEvents = () => {
    const storedBookedEvents = localStorage.getItem('booked-events')
    if (storedBookedEvents) {
        return JSON.parse(storedBookedEvents)
    }
    return [];
}

const saveBookEvents = id => {
    const storedBookedEvents = getStoredBookedEvents();
    const isExists = storedBookedEvents.find(eventId => eventId === id)

    if (!isExists) {
        storedBookedEvents.push(id);
        localStorage.setItem('booked-events' ,JSON.stringify(storedBookedEvents) )
    }


}



export { saveBookEvents, getStoredBookedEvents }