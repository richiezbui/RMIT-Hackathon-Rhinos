# Gamify Lecture Attendance
### by Rhinos
<br>

## Overview

This project is a web application that includes a responsive header with navigation, a homepage, and a quizzes page with weekly quizzes. The project is built using Next.js, Tailwind CSS, and Prisma for data management.

### Key Features

- **Responsive Navigation**: Includes a desktop navigation bar with a collapsible mobile menu for smaller screens.
- **Light and Dark Mode Support**: The application adapts to both light and dark mode based on user preferences.
- **Dynamic Weekly Quizzes**: Displays weekly quizzes with expandable sections for each week. (?)
- **Taking Attendance**: Students now can take attendance when they are in the geofencing location.

## Tech Stack

- **Next.js**: Framework for React applications, providing server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **Prisma**: ORM for interacting with the database.
- **TypeScript**: JavaScript with static types for improved development experience.

## Installation

### Prerequisites

Ensure you have Node.js and npm (or yarn) installed on your machine.

### Getting Started

1. **Clone the Repository**
```
git clone https://github.com/richiezbui/RMIT-Hackathon-Rhinos.git
```

2. **Install Dependencies**
```
npm install
```

3. **Set Up Environment Variables**
Create a .env file in the root directory and add the given environment variables.
```
OPENCAGE_API_KEY=4e3d2ed8ee4a4437a576855ee7624a49
```

4. **Run Database Migrations**
```
npx prisma migrate dev
```

5. **Start the Development Server**
```
npm run dev
```

6. **Open Your Browser**

Visit `http://localhost:3000` to see the application in action.


