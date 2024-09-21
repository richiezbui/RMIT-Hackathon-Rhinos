import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; 

export async function POST(request: Request) {

  const { incrementBy } = await request.json();

  // Hardcoded email for John for now
  const email = 'john02@examplemail.gmail.com';

  try {

    const updatedStudent = await prisma.student.update({
      where: { email },
      data: {
        points: {
          increment: incrementBy || 1, 
        },
      },
    });

    return NextResponse.json({ message: 'Points successfully updated', updatedStudent }, { status: 200 });
  } catch (error) {
    console.error('Error incrementing points:', error);
    return NextResponse.json({ error: 'Failed to increment points' }, { status: 500 });
  }
}
