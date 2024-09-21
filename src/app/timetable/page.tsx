// server component
import { prisma } from '@/lib/prisma';
import TimetableClient from './timetableClient';
import { MainNav } from '@/components/ui/main-nav';
import { UserNav } from '@/components/ui/user-nav';

export default async function TimetablePage() {

  const classes = await prisma.class.findMany({
    include: {
      locations: true,
    },
  });

  //pass to client
  return <>
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
    <TimetableClient classes={classes} />

  </>;
}