import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const currentTime = new Date();
  const oneHourAgo = new Date(currentTime.getTime() - 60 * 60 * 1000);
  const oneHourLater = new Date(currentTime.getTime() + 60 * 60 * 1000);

  // Hardcode the student for now
  const email = 'john02@examplemail.gmail.com';

  try {
    const student = await prisma.student.findUnique({
      where: { email },
      include: {
        classes: {
          where: {
            OR: [
              {
                startTime: {
                  gte: oneHourAgo,
                  lte: oneHourLater,
                },
              },
              {
                endTime: {
                  gte: oneHourAgo,
                  lte: oneHourLater,
                },
              },
            ],
          },
          include: {
            locations: true, 
          },
        },
      },
    });

    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    return NextResponse.json(student.classes, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch classes' }, { status: 500 });
  }
}
