import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'Description of the app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add any additional meta tags or links here */}
      </head>
      <body>
        {/* Render the children components */}
        {children}
      </body>
    </html>
  );
}
