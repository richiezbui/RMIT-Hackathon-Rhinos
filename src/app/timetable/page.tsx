// server component
import { prisma } from '@/lib/prisma';
import TimetableClient from './timetableClient';

export default async function TimetablePage() {

  const classes = await prisma.class.findMany({
    include: {
      locations: true,
    },
  });

  //pass to client
  return <TimetableClient classes={classes} />;
}