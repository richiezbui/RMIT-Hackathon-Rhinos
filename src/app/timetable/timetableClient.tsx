"use client";

import { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import { Class } from '@prisma/client';

type ClassWithLocation = Class & {
  locations: { address: string }[];
};

interface TimetableClientProps {
  classes: ClassWithLocation[];
}

const localizer = momentLocalizer(moment);

export default function TimetableClient({ classes }: TimetableClientProps) {
  const [view, setView] = useState<Views>('week');
  const [date, setDate] = useState<Date>(new Date());

  const [className, setClassName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [room, setRoom] = useState('');
  const [address, setAddress] = useState('');  // Address only, geocoding will handle lat/long
  const [allClasses, setAllClasses] = useState<ClassWithLocation[]>(classes);

  // Map class data to calendar events
  const events = allClasses.map((classItem) => ({
    title: `${classItem.name} (${classItem.room})`,
    start: new Date(classItem.startTime),
    end: new Date(classItem.endTime),
    location: classItem.locations.map((location) => location.address).join(', '),
    description: `Room: ${classItem.room}, Address: ${classItem.locations.map((location) => location.address).join(', ')}`,
  }));

  // Handle form submission
  const handleAddClass = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const newClass = {
      name: className,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      room: room,
      locations: [{ address }],
    };
  
    console.log("Submitting new class:", newClass);  // Add this to log the class data
  
    const response = await fetch('/api/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClass),
    });
  
    if (response.ok) {
      const addedClass = await response.json();
      console.log("Class successfully added:", addedClass);  // Log success
      setAllClasses([...allClasses, addedClass]);
    } else {
      const errorMessage = await response.text();
      console.error("Failed to add class:", errorMessage);  // Log any errors
    }
  
    setClassName('');
    setStartTime('');
    setEndTime('');
    setRoom('');
    setAddress('');
  };

  return (
    <div style={{ height: '900px' }}>
      <h1>Class Timetable</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
        view={view}
        date={date}
        onView={(newView) => setView(newView)}
        onNavigate={(newDate) => setDate(newDate)}
        toolbar={true}
        views={['month', 'week', 'day', 'agenda']}
        scrollToTime={new Date(1970, 1, 1, 8, 0, 0)} 
        timeslots={2}  // This will divide each hour into 2 segments, making each hour taller
        step={30}  // The number of minutes in each slot (30 minutes here)
        components={{
            timeSlotWrapper: ({ children }) => (
                <div style={{ height: '32px' }}> {/* Adjust the height as needed */}
                  {children}
                </div>
            ),
            event: ({ event }) => (
              <span>
                <strong>{event.title}</strong>
                <br />
                {event.description}
              </span>
            ),
          }}
    
      />
            <form onSubmit={handleAddClass} style={{ marginBottom: '20px' }}>
            <div>
                <label>Class Name:</label>
                <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required
                className="border border-gray-300 rounded p-2"
                />
            </div>
            <div>
                <label>Start Time:</label>
                <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
                className="border border-gray-300 rounded p-2"
                />
            </div>
            <div>
                <label>End Time:</label>
                <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                className="border border-gray-300 rounded p-2"
                />
            </div>
            <div>
                <label>Room:</label>
                <input
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                required
                className="border border-gray-300 rounded p-2"
                />
            </div>
            <div>
                <label>Location:</label>
                <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="border border-gray-300 rounded p-2"
                />
            </div>
            <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
                Add Class
            </button>
        </form>
    </div>
  );
}
