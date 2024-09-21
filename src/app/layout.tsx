import { UserNav } from '@/components/ui/user-nav';
import './globals.css';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuContent, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { MainNav } from '@/components/ui/main-nav';


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
        {children}
      </body>
    </html>
  );
}
