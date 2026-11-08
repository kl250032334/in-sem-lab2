import React from 'react';
import './RoomCard.css'; // Optional: for custom styling

function RoomCard({ roomNumber, type, price }) {
  return (
    <div className="room-card">
      <div className="room-header">
        <h3>ROOM: {roomNumber}</h3>
      </div>
      <div className="room-body">
        <p className="room-type"><strong>TYPE:</strong> {type}</p>
        <p className="room-price"><strong>PRICE:</strong> €{price}/night</p>
      </div>
    </div>
  );
}

export default RoomCard;