"use client";

import { useState } from 'react';
import buildings from './buildings'; // Import the buildings data

export default function Home() {
  const [selectedBuilding, setSelectedBuilding] = useState(null); // State to hold the selected building
  const [status, setStatus] = useState(''); // State to hold geofencing status
  const [distance, setDistance] = useState(null); // State to show distance from geofence

  // Function to handle Geofencing
  const handleGeofenceCheck = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
      return;
    }

    if (!selectedBuilding) {
      setStatus('Please select a building first.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        checkGeofence(userLatitude, userLongitude);
      },
      (error) => {
        setStatus(`Error getting location: ${error.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  // Function to check if user is within the geofence
  const checkGeofence = (userLat, userLng) => {
    const { latitude: geofenceCenterLat, longitude: geofenceCenterLng } = selectedBuilding;
    const geofenceRadius = 500; // Radius in meters

    const distance = getDistanceFromLatLonInMeters(
      userLat,
      userLng,
      geofenceCenterLat,
      geofenceCenterLng
    );

    setDistance(distance.toFixed(2)); // Update distance state

    if (distance <= geofenceRadius) {
      setStatus('Inside the geofence. Attendance can be marked.');
    } else {
      setStatus('Outside the geofence.');
    }
  };

  // Function to calculate distance between two coordinates
  const getDistanceFromLatLonInMeters = (lat1, lon1, lat2, lon2) => {
    const R = 6371000; // Radius of the Earth in meters
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Geofence Attendance Check</h1>
      <p>Select a building and click the button below to check attendance.</p>
      
      <select 
        onChange={(e) => setSelectedBuilding(buildings[e.target.value])}
        defaultValue=""
        style={{ padding: '10px', margin: '10px 0' }}
      >
        <option value="" disabled>Select a Building</option>
        {buildings.map((building, index) => (
          <option key={index} value={index}>
            {building.name}
          </option>
        ))}
      </select>

      <br />

      <button 
        onClick={handleGeofenceCheck} 
        style={{ padding: '10px 20px', margin: '20px 0' }}
      >
        Check Attendance
      </button>
      
      {status && (
        <div>
          <p>Status: {status}</p>
          {distance !== null && <p>Distance from geofence: {distance} meters</p>}
        </div>
      )}
    </div>
  );
}
