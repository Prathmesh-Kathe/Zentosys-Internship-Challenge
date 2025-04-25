# eCommerce API

This is a RESTful API for managing an eCommerce platform. The API is built using **Node.js**, **Express**, and **MongoDB**. It includes features like product management, user authentication, and order handling.

## Features

- **User Management**:
  - Register and login functionality with JWT-based authentication.
- **Product Management**:
  - Create, read, update, and delete products.
- **Order Management**:
  - Create and manage customer orders.
- **Middleware**:
  - Authentication middleware to protect routes.
  - Error handling middleware for consistent error responses.
- **Database**:
  - MongoDB with Mongoose for schema modeling.

## Folder Structure

```
eCommerce/
├── package.json
├── readme.md
├── Models/
│   ├── Card.model.js
│   ├── Order.model.js
│   ├── Product.model.js
│   └── User.model.js
├── routers/
│   └── Product.js
```

## Key Files

1. **`Models/User.model.js`**:
   - Defines the schema for user data, including authentication details.
2. **`Models/Product.model.js`**:
   - Defines the schema for product data.
3. **`Models/Order.model.js`**:
   - Defines the schema for order data.
4. **`routers/Product.js`**:
   - Handles routes for managing products.

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd eCommerce
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
     MONGO_URI=mongodb://127.0.0.1:27017/eCommerce
     JWT_SECRET=your-secret-key
     ```

4. Start the server:
   ```bash
   npm start
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

### Product Routes

- **GET** `/api/products`:
  - Fetches all products.

- **GET** `/api/products/:id`:
  - Fetches a single product by ID.

- **POST** `/api/products`:
  - Creates a new product.
  - Request body:
    ```json
    {
      "name": "Product Name",
      "price": 100,
      "description": "Product description",
      "category": "Category Name"
    }
    ```

- **PUT** `/api/products/:id`:
  - Updates an existing product.
  - Request body:
    ```json
    {
      "name": "Updated Product Name",
      "price": 120
    }
    ```

- **DELETE** `/api/products/:id`:
  - Deletes a product by ID.

## Dependencies

- `express`: Web framework for building APIs.
- `mongoose`: MongoDB object modeling tool.
- `jsonwebtoken`: For generating and verifying JWT tokens.
- `bcryptjs`: For hashing passwords.
- `dotenv`: For managing environment variables.
- `cors`: For enabling Cross-Origin Resource Sharing.

## License

This project is licensed under the MIT License.
