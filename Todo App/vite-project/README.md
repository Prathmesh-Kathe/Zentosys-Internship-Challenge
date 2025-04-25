# Vite Project - Todo App

This is a **React** project built with **Vite**. It is a simple **Todo App** that allows users to manage their tasks efficiently. The app supports task creation, editing, deletion, and filtering based on their completion status.

## Features

- **Add Tasks**: Create new tasks with ease.
- **Edit Tasks**: Update task descriptions directly in the list.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Mark as Completed**: Toggle tasks between completed and pending states.
- **Filter Tasks**: View tasks based on their status (All, Completed, Pending).
- **Local Storage**: Persist tasks and filters across page reloads.
- **Responsive Design**: Optimized for all screen sizes.

## Folder Structure

```
vite-project/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   └── react.svg
    └── components/
        ├── FilterList.jsx
        ├── TodoForm.jsx
        └── TodoLists.jsx
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd "vite-project"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Key Files

### `src/App.jsx`

- The main component that integrates the **TodoForm**, **TodoLists**, and **FilterList** components.
- Manages the state for tasks, input, and filters.

### `src/components/TodoForm.jsx`

- Handles task creation.
- Includes an input field and a button to add tasks.

### `src/components/TodoLists.jsx`

- Displays the list of tasks.
- Allows editing, deleting, and toggling the completion status of tasks.

### `src/components/FilterList.jsx`

- Provides buttons to filter tasks based on their status (All, Completed, Pending).

### `src/main.jsx`

- Entry point of the application.
- Renders the `App` component into the DOM.

### `src/index.css` and `src/App.css`

- Contains global and component-specific styles.

## Technologies Used

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Local Storage**: For persisting tasks and filters

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for code quality.

## Live Demo

You can view the live demo of the project here: [Todo App](https://zentosys-internship-challenge-rizj.vercel.app/)

## License

This project is licensed under the MIT License.
