# Frontend - Task Management System

This is the frontend for a **Task Management System** built using **Next.js**, **TailwindCSS**, and **React DnD**. It connects to the backend API for user authentication and task management.

## Features

- **User Authentication**:
  - Login functionality with JWT-based authentication.
- **Board Management**:
  - Create boards, lists, and tasks.
  - Drag and drop tasks across lists.
  - Assign tasks to users.
- **Activity Logs**:
  - Show activity logs and timestamps for actions performed.
- **Responsive Design**:
  - Mobile-friendly layout for better accessibility.

## Folder Structure

```
frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Board.js
│   │   ├── List.js
│   │   └── Task.js
│   ├── pages/
│   │   ├── api/
│   │   │   └── auth.js
│   │   ├── index.js
│   │   └── login.js
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   └── api.js
│   └── hooks/
│       └── useAuth.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The application will run on [http://localhost:3000](http://localhost:3000).

## Key Files

### `src/components/Board.js`

- Represents a board in the task management system.

### `src/components/List.js`

- Represents a list within a board and manages tasks.

### `src/components/Task.js`

- Represents an individual task and allows interaction.

### `src/pages/api/auth.js`

- Handles user registration and login.

### `src/pages/index.js`

- Main landing page displaying boards.

### `src/pages/login.js`

- Login page for user authentication.

### `src/styles/globals.css`

- Global CSS styles for the application.

### `src/utils/api.js`

- Utility functions for making API calls.

### `src/hooks/useAuth.js`

- Custom hook for managing authentication state.

## Dependencies

- `next`: Framework for server-rendered React applications.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `tailwindcss`: Utility-first CSS framework for styling.
- `react-beautiful-dnd`: Library for drag-and-drop functionality.

## License

This project is licensed under the MIT License.
