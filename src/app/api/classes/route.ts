import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Import node-fetch to make API requests
import fetch from 'node-fetch';

export async function POST(request: Request) {
  const { name, startTime, endTime, room, locations } = await request.json();
  const { address } = locations[0];

  console.log("Received request to add class:", { name, startTime, endTime, room, address });

  try {

    const existingLocation = await prisma.location.findFirst({
      where: { address },
    });

    let locationId;

    if (existingLocation) {
      locationId = existingLocation.id;
      console.log("Using existing location with id:", locationId);
    } else {

      const geocodedLocation = await geocodeAddress(address);
      if (!geocodedLocation) {
        console.error("Geocoding failed for address:", address); 
        return NextResponse.json({ error: `Geocoding failed for address: ${address}` }, { status: 400 });
      }

      const newLocation = await prisma.location.create({
        data: {
          address,
          latitude: geocodedLocation.latitude,
          longitude: geocodedLocation.longitude,
        },
      });
      locationId = newLocation.id;
      console.log("Created new location with id:", locationId);
    }

    // Fetch the hardcoded student
    const student = await prisma.student.findUnique({
      where: { email: 'john02@examplemail.gmail.com' },
    });

    if (!student) {
      console.error("Student not found");
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    // Create the new class
    const newClass = await prisma.class.create({
      data: {
        name,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        room,
        locations: {
          connect: { id: locationId },
        },
        students: {
          connect: { id: student.id },
        },
      },
      include: {
        locations: true,
        students: true,
      },
    });

    console.log("Class successfully created:", newClass);
    return NextResponse.json(newClass, { status: 200 });
  } catch (error) {
    console.error("Failed to create class:", error);  
    return NextResponse.json({ error: `Failed to create class: ${error.message}` }, { status: 500 });
  }
}


async function geocodeAddress(address: string) {
  const apiKey = process.env.OPENCAGE_API_KEY; 
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { latitude: lat, longitude: lng };
    } else {
      console.error("No results found for address:", address);
      return null;
    }
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
    return null;
  }
}
