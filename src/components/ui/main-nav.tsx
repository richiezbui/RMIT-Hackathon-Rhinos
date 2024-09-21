import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/leaderboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Leaderboard
      </Link>
      <Link
        href="/quizPage"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Quizes
      </Link>
      <Link
        href="/takeAttendance"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Attendance
      </Link>

      <Link
        href="/timetable"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Timetable
      </Link>
    </nav>
  )
}