# Task Manager App (MERN Stack)

This is a full-stack Task Manager web application built as part of a Frontend Developer Intern shortlisting assignment. The main focus of this project is frontend development, authentication, protected dashboard, and CRUD operations integrated with a backend API. Users can sign up, log in, and manage their own tasks in a secure and user-friendly dashboard.

## Tech Stack

Frontend:
- React.js
- Tailwind CSS
- React Router DOM
- react-hot-toast

Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt (password hashing)
- jsonwebtoken (JWT authentication)
- dotenv
- cors
- cookie-parser

## Live Project Links

Frontend (Vercel): https://web-dev-practice-ljn9-e52xny89m.vercel.app/  
Backend (Vercel): https://web-dev-practice-azure.vercel.app/  

Frontend GitHub: https://github.com/PiyushSutharScriptor/WebDevPractice/tree/main/frontend-to-do-mern  
Backend GitHub: https://github.com/PiyushSutharScriptor/WebDevPractice/tree/main/backend-to-do-mern  

## ⚙️ Setup Instructions (Local)

1. Clone the repository  
git clone <repo-url>  
cd project-folder  

2. Backend Setup  
cd backend-to-do-mern  
npm install  

Create a .env file in backend folder:  
PORT=3000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  

Run backend:  
npm start  

Backend runs on:  
http://localhost:3000  

3. Frontend Setup  
cd frontend-to-do-mern  
npm install  
npm run dev  

Frontend runs on:  
http://localhost:5173  

## API Endpoints

Authentication:  
POST /signup → Register new user  
POST /login → Login user  

Profile:  
GET /me → Fetch logged-in user profile (protected)  

Tasks:  
POST /form/add → Add task (protected)  
GET /form/get → Get all user tasks (protected)  
PUT /form/update/:id → Update task (protected)  
DELETE /form/delete/:id → Delete task (protected)  

Protected routes require Authorization header:  
Authorization: Bearer <token>  

## API Testing (Postman)

All APIs were tested using Postman including signup, login, JWT authentication, and CRUD operations on tasks. To test protected routes, first login to get token and then pass it in Authorization header as Bearer token.

## How would you scale this for production?

To scale this application for production, I would use environment-based configuration for frontend and backend, restrict CORS to only the deployed frontend domain, implement refresh tokens for better authentication, add pagination for task lists, add database indexing for faster queries, use Redis for caching, add rate limiting for security, use Docker for containerization, add centralized logging and monitoring, and deploy frontend and backend separately on cloud infrastructure.
