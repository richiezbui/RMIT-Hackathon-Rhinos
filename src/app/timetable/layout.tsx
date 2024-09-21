export default function TimetableLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    );
  }