# Electronics & Robotics Club (ERC) TCET - Backend API

Production REST API service for the Electronics & Robotics Club (ERC) of Thakur College of Engineering & Technology (TCET), Mumbai.

Built with Node.js, Express.js, and MongoDB Atlas with Mongoose ODM.

---

## 🛠️ Architecture & Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js 4.x
- **Database**: MongoDB Atlas via Mongoose 8.x
- **Security**:
  - Helmet.js for secure HTTP headers
  - Configurable CORS policy
  - Express Rate Limiting (General & strict registration anti-spam)
  - 10KB payload body parsing limit
  - Centralized error handling

---

## 📁 Directory Structure

```text
backend/
├── src/
│   ├── config/
│   │   └── db.js                 # MongoDB connection & lifecycle management
│   ├── controllers/
│   │   ├── zephyrController.js   # Zephyr delegate registration & duplicate checks
│   │   └── workshopController.js # Workshop registration & duplicate checks
│   ├── middleware/
│   │   ├── errorHandler.js       # Centralized error & 404 handler
│   │   └── rateLimiter.js        # IP rate limiting configurations
│   ├── models/
│   │   ├── ZephyrRegistration.js # Schema with unique compound index (email + track)
│   │   └── WorkshopRegistration.js # Schema with unique compound index (email + workshop)
│   ├── routes/
│   │   ├── zephyrRoutes.js       # /api/zephyr endpoints
│   │   └── workshopRoutes.js     # /api/workshops endpoints
│   └── server.js                 # Application entry point
├── .env.example
├── .gitignore
└── package.json
```

---

## 🚀 Local Development Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Update the variables in `.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/erc_database?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:5173
```

### 3. Start Server
```bash
# Development (with file watch)
npm run dev

# Production
npm start
```

---

## 📡 API Reference

### Health Check
- **`GET /api/health`**
- **Response**: `200 OK`
```json
{
  "status": "ok",
  "message": "ERC Backend Running",
  "timestamp": "2026-09-12T17:30:00.000Z",
  "environment": "development"
}
```

### Zephyr 2026 Delegate Registration
- **`POST /api/zephyr/register`**
- **Request Body**:
```json
{
  "name": "Rahul Sharma",
  "email": "rahul.sharma@tcetmumbai.in",
  "phone": "+91 9876543210",
  "college": "Thakur College of Engineering and Technology",
  "department": "Electronics and Telecommunication",
  "year": "Second Year (SE)",
  "track": "UAV, Autonomous Flight & Drone Delivery Robot"
}
```
- **Success Response (`201 Created`)**:
```json
{
  "success": true,
  "message": "Registration successful",
  "registrationId": "ERC-ZEPHYR-83921"
}
```
- **Duplicate Registration (`409 Conflict`)**:
```json
{
  "success": false,
  "message": "You are already registered for this event track.",
  "registrationId": "ERC-ZEPHYR-83921"
}
```

### Workshop Registration
- **`POST /api/workshops/register`**
- **Request Body**:
```json
{
  "name": "Abhay Vishwakarma",
  "email": "abhay@tcetmumbai.in",
  "phone": "+91 9876543210",
  "college": "TCET",
  "workshop": "Drone Assembly & Betaflight Tuning"
}
```
- **Success Response (`201 Created`)**:
```json
{
  "success": true,
  "message": "Workshop registration successful",
  "registrationId": "ERC-WS-49210"
}
```
- **Duplicate Registration (`409 Conflict`)**:
```json
{
  "success": false,
  "message": "You are already registered for this workshop.",
  "registrationId": "ERC-WS-49210"
}
```

---

## ☁️ Render Deployment Instructions

1. Link your GitHub repository to [Render](https://render.com).
2. Click **New +** -> **Web Service**.
3. Set the following settings:
   - **Name**: `erc-tcet-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add **Environment Variables**:
   - `NODE_ENV` = `production`
   - `PORT` = `10000` (Render sets this automatically)
   - `MONGODB_URI` = `<Your MongoDB Atlas connection string>`
   - `FRONTEND_URL` = `https://<your-vercel-domain>.vercel.app`
5. Click **Create Web Service**.
