# Blog Website

This is a **Next.js** project that serves as a blog platform. It features a dynamic blog post system, a contact form, and a dark mode toggle for enhanced user experience.

## Features

- **Dynamic Blog Posts**: Fetches blog posts from an external API and displays them dynamically.
- **Dark Mode Toggle**: Allows users to switch between light and dark themes.
- **Contact Form**: A functional contact form to collect user messages.
- **Responsive Design**: Fully responsive layout for all devices.

## Folder Structure

```
Blog Website/
├── my-app/
│   ├── .gitignore
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── package.json
│   ├── postcss.config.js
│   ├── postcss.config.mjs
│   ├── README.md
│   ├── tailwind.config.js
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   └── contact/
│   │       └── page.js
│   ├── public/
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   └── .next/
│       └── (build files)
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd "Blog Website/my-app"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Key Files

### `app/page.js`

- Displays the homepage with a list of blog posts fetched from an external API.

### `app/blog/[slug]/page.js`

- Displays the details of a specific blog post based on the dynamic route.

### `app/contact/page.js`

- Contains a functional contact form to collect user messages.

### `app/layout.js`

- Defines the layout of the application, including the dark mode toggle.

### `app/api/contact/route.js`

- Handles the backend logic for the contact form submission.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Icons**: React Icons
- **Styling**: Tailwind CSS
- **API**: JSONPlaceholder for blog posts

## Features in Detail

### Blog Posts

- Blog posts are fetched dynamically from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).
- Each post has a title, body, and metadata like date and reading time.

### Dark Mode

- Users can toggle between light and dark themes.
- The theme preference is stored in `localStorage` for persistence across sessions.

### Contact Form

- A simple form to collect user name, email, and message.
- The form submission is handled via a POST request to the `/api/contact` endpoint.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs the linter.

## License

This project is licensed under the MIT License.
