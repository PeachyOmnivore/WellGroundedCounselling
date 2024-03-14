/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { get, put } from "../../client-functions";
import "./booking.css";
import Button from "../../components/button";

function Booking({currentUser}) {

  const [availableDates, setAvailableDates] = useState(null);

  async function findBookings() {
    try {
      const foundBookings = await get("bookings");
      setAvailableDates(foundBookings.foundBookings);
    } catch (err) {
      console.error('Error fetching booking info:', err);
    }
  }

  async function BookATimeSlot(userId, timeSlotId) {

    const bodyData = {
      userId: userId
    }

    try {
      await put(bodyData, `bookings/${timeSlotId}`);
      findBookings()
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
        <h1>Current availabililties</h1>
      <section className="availableDates-container">
        {availableDates ? (
          <ul className="day-container">
            {availableDates.map((date) => (
              <li key={date.id}>
                <h2>{date.month} {date.day}</h2>
                <ul>
                  {date.timeSlots.map((slot) => (
                    <li key={slot.id}>
                      {slot.time} - {slot.status} <Button text={"Book"} onClick={() => BookATimeSlot(currentUser.foundUser.id, slot.id)}/>
                    </li>
                  ))}
                </ul>

              </li>
            ))}
          </ul>

        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
}

export default Booking;