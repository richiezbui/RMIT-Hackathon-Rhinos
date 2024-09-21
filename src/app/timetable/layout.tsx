export default function TimetableLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <header>
            <h1>Timetable</h1>
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }