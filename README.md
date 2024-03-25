**README**

# MERN Blog Application

Welcome to the MERN Blog Application! This is a full-stack web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application provides a platform for users to create, read, update, and delete blog posts, as well as interact with other users through comments and likes.

## Features

- **User Authentication**: Users can sign up, sign in, and sign out securely. Passwords are encrypted before being stored in the database.
- **CRUD Operations**: Admin can create, read, update, and delete their blog posts.
- **Commenting System**: Users can comment on blog posts, edit their comments, and delete them. Admin can also edit and delete comments.
- **Like Functionality**: Users can like blog posts and comments.
- **Admin Panel**: Admin users have additional functionalities, including managing user accounts, deleting inappropriate content, and overviewing site analytics.
- **Responsive Design**: The application is designed to be responsive and accessible on various devices and screen sizes.

## Installation

To run the MERN Blog Application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd mern-blog
   ```

3. Install dependencies for the server:

   ```bash
   npm install
   ```

4. Navigate to the client directory:

   ```bash
   cd client
   ```

5. Install dependencies for the client:

   ```bash
   npm install
   ```

6. Create a `.env` file in the root directory and specify environment variables:

   ```
   PORT=5000
   MONGO_URI=<your_mongodb_uri>
   SECRET_KEY=<your_secret_key>
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

8. Open your browser and visit `http://localhost:3000` to view the application.

## Technologies Used

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: Redux Toolkit
- **Deployment**: Render (for deployment to production)
