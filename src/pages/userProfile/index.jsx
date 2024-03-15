/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './userProfile.css'
import { put } from '../../client-functions';
import Button from '../../components/button';

function UserProfile({ user }) {
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  useEffect(() => {
    setEditedUser({ ...user });
  }, [user]);

  const handleEdit = () => {
    setEditing(true);
  };

  const cancelBooking = async (timeSlotId) => {
    await put(undefined, `bookings/cancel/${timeSlotId}`)
    window.location.reload();
  }

  const handleSave = async () => {
    await put(editedUser, `users/${user.id}`)
    setEditing(false);
    window.location.reload();
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  return user && (
    <div className='userProfile-container'>
      {user ? <section className='user-details'>
        <h2>User Profile</h2>
        <form>
          <label htmlFor="firstName"> First Name:</label>
          {editing ? <input name="firstName" value={editedUser.firstName} onChange={handleChange} /> : <span>{user.firstName}</span>}
          <label htmlFor="lastName"> Last name:</label>
          {editing ? <input name="lastName" value={editedUser.lastName} onChange={handleChange} /> : <span>{user.lastName}</span>}
          <label htmlFor="phone"> Phone number:</label>
          {editing ? <input name="phone" value={editedUser.phone} onChange={handleChange} /> : <span>{user.phone}</span>}
          <label htmlFor="email"> Email:</label>
          {editing ? <input name="email" value={editedUser.email} onChange={handleChange} /> : <span>{user.email}</span>}
          {editing ? <Button className={'editSaveButton'} text={"Save"} onClick={handleSave} /> : <Button className={'editSaveButton'} text={"Edit"} onClick={handleEdit} />}
        </form>
        <h2>Bookings</h2>
        
        {user.timeSlot.map((timeslot, index) => (
          <div className='timeslot' key={index}>
            <p>{timeslot.availableDate.month} {timeslot.availableDate.day} at {timeslot.time}</p>
            <Button onClick={() => cancelBooking(timeslot.id)} text={"Cancel"} />
          </div>
        ))}
      </section> :
        <p>Loading...</p>}
    </div>
  )
}

export default UserProfile