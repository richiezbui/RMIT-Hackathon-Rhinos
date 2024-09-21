export default function TimetableLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <header>
            <h1>Timetable Header</h1>
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }