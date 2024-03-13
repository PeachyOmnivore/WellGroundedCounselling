import { useState } from "react";
import "./booking.css";

function Booking() {
  const INITIAL_STATE = {
    "March": [
      {
        day: 1,
        time: {
          "10:00": true,
          "12:00": true,
          "14:00": true,
          "16:00": true,
        },
      },
      {
        day: 2,
        time: {
          "10:00": true,
          "12:00": true,
          "14:00": true,
          "16:00": true,
        },
      },
      {
        day: 3,
        time: {
          "10:00": true,
          "12:00": true,
          "14:00": true,
          "16:00": true,
        },
      },
      {
        day: 4,
        time: {
          "10:00": true,
          "12:00": true,
          "14:00": true,
          "16:00": true,
        },
      },
    ],
    "April": [
      {
        day: 1,
        time: {
          "10:00": true,
          "12:00": true,
          "14:00": true,
          "16:00": true,
        },
      },
      {
        day: 2,
        time: {
          "10:00": true,
          "12:00": true,
          "14:00": true,
          "16:00": true,
        },
      },
      {
        day: 3,
        time: {
          "10:00": true,
          "12:00": true,
          "14:00": true,
          "16:00": true,
        },
      },
      {
        day: 4,
        time: {
          "10:00": true,
          "12:00": false,
          "14:00": true,
          "16:00": true,
        },
      },

    ],

  };

  const [availableDates] = useState(INITIAL_STATE);

  return (
    <div className="booking-container">
      <h1>Available dates</h1>
      <ul>
        {Object.entries(availableDates).map(([month, days]) => (
          <li key={month}>
            <h2>{month}</h2>
            <ul>
              {days.map((dayData) => (
                <li key={dayData.day}>
                  <p>
                    {month} {dayData.day}
                  </p>
                  <ul>
                    {Object.entries(dayData.time).map(([timeSlot, isAvailable]) => (
                      <li key={timeSlot}>
                        <p>{timeSlot}: {isAvailable ? "Available" : "Booked"}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Booking;