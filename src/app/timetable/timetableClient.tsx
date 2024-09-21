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


  const events = classes.map((classItem) => ({
    title: `${classItem.name} (${classItem.room})`,
    start: new Date(classItem.startTime),
    end: new Date(classItem.endTime),
    location: classItem.locations.map((location) => location.address).join(', '),
  }));

  return (
    <div style={{ height: '700px' }}>
      <h1>Class Timetable</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        view={view}        
        date={date}     
        onView={(newView) => setView(newView)} 
        onNavigate={(newDate) => setDate(newDate)} 
        toolbar={true}        
        views={['month', 'week', 'day', 'agenda']}  
      />
    </div>
  );
}
