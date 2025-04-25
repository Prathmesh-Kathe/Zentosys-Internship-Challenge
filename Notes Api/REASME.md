# Notes API

This is a RESTful API for managing notes with user authentication. The API is built using Express.js and MongoDB and includes features like JWT-based authentication, CRUD operations for notes, and middleware for error handling.

## Features

- **User Authentication**:
  - Register and login functionality with JWT-based authentication.
- **Notes Management**:
  - Create, read, update, and delete notes.
  - Notes are associated with authenticated users.
- **Middleware**:
  - Authentication middleware to protect routes.
  - Error handling middleware for consistent error responses.
- **Database**:
  - MongoDB with Mongoose for schema modeling.

## Folder Structure

```
Notes Api/
├── .env
├── app.js
├── package.json
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── noteController.js
├── middlewares/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── Model/
│   ├── Note.js
│   └── User.js
├── router/
│   ├── authRoutes.js
│   └── noteRoutes.js
```

### Key Files

1. **`app.js`**:
   - Entry point of the application.
   - Sets up middleware, routes, and error handling.

2. **`config/db.js`**:
   - MongoDB connection configuration.

3. **Controllers**:
   - `authController.js`: Handles user registration and login.
   - `noteController.js`: Handles CRUD operations for notes.

4. **Middlewares**:
   - `authMiddleware.js`: Protects routes by verifying JWT tokens.
   - `errorMiddleware.js`: Handles errors and sends consistent error responses.

5. **Models**:
   - `User.js`: Defines the schema for user data.
   - `Note.js`: Defines the schema for note data.

6. **Routes**:
   - `authRoutes.js`: Routes for user authentication (register, login).
   - `noteRoutes.js`: Routes for managing notes (CRUD operations).

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd "Notes Api"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=5000
     MONGO_URI=mongodb://127.0.0.1:27017/Notes
     JWT_SECRET=your-secret-key
     ```

4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication Routes

- **POST** `/api/auth/register`:
  - Registers a new user.
  - Request body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **POST** `/api/auth/login`:
  - Logs in an existing user and returns a JWT token.
  - Request body:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

### Notes Routes

- **GET** `/api/notes`:
  - Fetches all notes for the authenticated user.

- **GET** `/api/notes/:id`:
  - Fetches a single note by ID (only if owned by the authenticated user).

- **POST** `/api/notes`:
  - Creates a new note.
  - Request body:
    ```json
    {
      "title": "Sample Note",
      "content": "This is a sample note.",
      "tags": ["tag1", "tag2"]
    }
    ```

- **PUT** `/api/notes/:id`:
  - Updates an existing note.
  - Request body (fields are optional):
    ```json
    {
      "title": "Updated Note Title",
      "content": "Updated content.",
      "tags": ["updatedTag"]
    }
    ```

- **DELETE** `/api/notes/:id`:
  - Deletes a note by ID.

## Dependencies

- `express`: Web framework for building APIs.
- `mongoose`: MongoDB object modeling tool.
- `jsonwebtoken`: For generating and verifying JWT tokens.
- `bcryptjs`: For hashing passwords.
- `dotenv`: For managing environment variables.
- `cors`: For enabling Cross-Origin Resource Sharing.
- `morgan`: For logging HTTP requests.

## License

This project is licensed under the MIT License.
