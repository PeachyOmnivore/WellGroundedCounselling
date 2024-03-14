import { useEffect, useState } from "react";
import { get } from "../../client-functions";
import "./booking.css";

function Booking() {

  const [availableDates, setAvailableDates] = useState(null);

  async function findBookings() {
    try {
      const foundBookings = await get("bookings");
      setAvailableDates(foundBookings.foundBookings);
    } catch (err) {
      console.error('Error fetching booking info:', err);
    }
  }

  useEffect(() => {
    findBookings()
  }, [])

  console.log("AVAILABLE DATES", availableDates)

  return (
    <div className="booking-container">
      <h1>Available dates</h1>
      {availableDates ? (
        <ul>
          {availableDates.map((date) => (
            <li key={date.id}>
              <h2>{date.month} {date.day}</h2>
              <ul>
                {date.timeSlots.map((slot) => (
                  <li key={slot.id}>
                    {slot.time} - {slot.status}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Booking;