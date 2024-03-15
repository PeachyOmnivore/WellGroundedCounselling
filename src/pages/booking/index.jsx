/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { deleteTimeSlot, get, put } from "../../client-functions";
import "./booking.css";
import Button from "../../components/button";

function Booking({ currentUser, currentlyAdmin }) {

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

  const removeTimeSlot = async (timeSlotId) => {
    try {
      await deleteTimeSlot(undefined, `bookings/${timeSlotId}`)
    } catch (err) {
      console.error('Error deleting booking info:', err);
    }
  }

  useEffect(() => {
    findBookings()
  }, [])

  return (
    <div className="booking-container">
      <h1>Current availabililties</h1>
      <section className="availableDates-container">
        {currentlyAdmin ? <Button className={"addSession"} text={"Add a session"} /> : undefined}
        {availableDates ? (
          <ul className="day-container">
            {availableDates.map((date) => (
              <li key={date.id}>
                <h2>{date.month} {date.day}</h2>
                <ul className="timeslot-container">
                  {date.timeSlots.map((slot) => (
                    <li className="timeslot" key={slot.id}>
                      {slot.time} - {slot.status} {!currentlyAdmin ? <Button className={slot.status === "Unavailable" ? "disable" : ""} text={"Book"} onClick={() => BookATimeSlot(currentUser.foundUser.id, slot.id)} /> : <Button text={"Remove"} onClick={() => removeTimeSlot(slot.id)} />}
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