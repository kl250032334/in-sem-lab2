import React from 'react';
import RoomCard from './RoomCard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>The Royal Hotel</h1>
      <div className="cards-container">
        {/* Card 1: Single Room */}
        <RoomCard 
          roomNumber="101" 
          type="SINGLE" 
          price={80} 
        />

        {/* Card 2: Double Room */}
        <RoomCard 
          roomNumber="205" 
          type="DOUBLE" 
          price={120} 
        />

        {/* Card 3: Suite */}
        <RoomCard 
          roomNumber="312" 
          type="SUITE" 
          price={190} 
        />
      </div>
    </div>
  );
}

export default App;