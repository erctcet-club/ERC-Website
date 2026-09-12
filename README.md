# 🚀 Electronics & Robotics Club (ERC) — TCET Mumbai

Official web application and technical platform for the **Electronics & Robotics Club (ERC)** of **Thakur College of Engineering & Technology (TCET)**, Mumbai.

A futuristic, aerospace-inspired web application built with **React 19**, **Tailwind CSS v4**, **Node.js**, **Express.js**, and **MongoDB Atlas**.

---

## 🏛️ System Architecture

```text
                           CLIENTS / BROWSERS
                                   │
                                   ▼
                 ┌──────────────────────────────────┐
                 │          Vercel Platform         │
                 │      React 19 + Vite Frontend    │
                 │   Tailwind CSS v4 & Lucide Icons │
                 └─────────────────┬────────────────┘
                                   │
                                   │ HTTPS REST APIs
                                   │ (CORS Restricted, Helmet, Rate Limited)
                                   ▼
                 ┌──────────────────────────────────┐
                 │           Render Cloud           │
                 │       Node.js + Express.js       │
                 │  Controllers, Validation, Limits │
                 └─────────────────┬────────────────┘
                                   │
                                   │ Mongoose ODM (TLS)
                                   ▼
                 ┌──────────────────────────────────┐
                 │          MongoDB Atlas           │
                 │   Cloud Database Cluster         │
                 │  • zephyr_registrations          │
                 │  • workshop_registrations        │
                 └──────────────────────────────────┘
```

---

## ⚡ Tech Stack

### Frontend
- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 6+
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons & Effects**: `lucide-react`, `canvas-confetti`
- **Audio**: Web Audio API Procedural Telemetry SFX Engine
- **Hosting**: Vercel

### Backend
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js 4.x
- **Database ODM**: Mongoose 8.x
- **Security & Middleware**:
  - `helmet`: HTTP header hardening
  - `cors`: Strict origin validation
  - `express-rate-limit`: Anti-abuse and duplicate submission rate limiting
- **Hosting**: Render

### Database
- **Platform**: MongoDB Atlas
- **Collections**:
  - `zephyr_registrations`: Delegate passes with compound unique index on `{ email: 1, track: 1 }`
  - `workshop_registrations`: Seat reservations with compound unique index on `{ email: 1, workshop: 1 }`

---

## 🌟 Core Features

- **Aerospace HUD Interface**: Custom telemetry grids, neon glowing status indicators, and responsive tactical navigation.
- **ERC Team Hierarchy**: Visual executive tree showcasing Faculty Mentor, Club Lead, Co-Lead, and 7 specialized domain leads.
- **Zephyr 2026 Registration Portal**: Flagship technical event countdown, real-time seat status, and automated digital delegate pass generation.
- **Interactive Technical Workshops**: Hands-on hardware clinic catalog with instant seat reservation and venue instructions.
- **Technical Domains Showcase**: Interactive filtering across all 9 ERC engineering domains (UAVs, AMRs, High-Speed PCBs, Edge AI, etc.).
- **Live Sound Effects**: Toggleable procedural audio feedback for UI telemetry interactions.
- **Duplicate Registration Prevention**: Prevents double-registration on the same email and track via database compound indexes and API duplicate handling (`HTTP 409 Conflict`).

---

## 📁 Repository Structure

```text
erc-tcet-website/
├── backend/                      # Node.js + Express REST API
│   ├── src/
│   │   ├── config/               # Database connection (db.js)
│   │   ├── controllers/          # Zephyr & Workshop business logic
│   │   ├── middleware/           # Rate limiter & centralized error handlers
│   │   ├── models/               # Mongoose schemas & indexes
│   │   ├── routes/               # API route definitions
│   │   └── server.js             # Express app entry point
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── public/                       # Static assets, robots.txt, sitemap.xml
│   ├── erc-logo.png              # Official circular ERC TCET badge
│   ├── robots.txt
│   └── sitemap.xml
├── src/                          # React application
│   ├── components/               # Navbar, Hero, About, Domains, Zephyr, Team, Modals
│   ├── config/                   # API endpoint configurations
│   ├── context/                  # Authentication & registration state
│   ├── data/                     # Domain, Zephyr, project, and team datasets
│   └── utils/                    # Procedural audio synthesis
├── .env.example                  # Frontend environment template
├── .gitignore
├── index.html                    # SEO optimized title, OG tags, Twitter cards
├── package.json                  # Frontend dependencies
├── vercel.json                   # Vercel SPA rewrites & cache control
└── vite.config.js
```

---

## 💻 Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/erctcet-club/erc-tcet-website.git
cd erc-tcet-website
```

### 2. Configure Backend
```bash
cd backend
npm install
cp .env.example .env
```
Edit `backend/.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/erc_database?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:5173
```
Start backend server:
```bash
npm run dev
# Backend runs at http://localhost:5000
```

### 3. Configure Frontend
Open a new terminal in the repository root:
```bash
npm install
cp .env.example .env
```
Edit `.env`:
```env
VITE_API_URL=http://localhost:5000
```
Start frontend server:
```bash
npm run dev
# Frontend runs at http://localhost:5173
```

---

## 🗄️ MongoDB Atlas Setup Guide

1. Sign in to [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a free **M0 Shared Cluster** (e.g. AWS `ap-south-1` Mumbai).
3. **Database Access**:
   - Go to **Security** -> **Database Access**.
   - Click **Add New Database User**.
   - Choose **Password Authentication**, enter a username (e.g., `erc_admin`) and a secure password.
   - Assign role: **Read and write to any database**.
4. **Network Access**:
   - Go to **Security** -> **Network Access**.
   - Click **Add IP Address**.
   - For Render cloud deployment, select **Allow Access from Anywhere** (`0.0.0.0/0`) or specify Render egress IPs.
5. **Connection String**:
   - Go to **Deployments** -> **Database**.
   - Click **Connect** -> **Drivers** (Node.js).
   - Copy connection string:
     ```text
     mongodb+srv://<username>:<password>@<cluster>.mongodb.net/erc_database?retryWrites=true&w=majority
     ```
   - Paste this into your `backend/.env` and Render environment settings.

---

## ☁️ Deployment Instructions

### Deploy Backend on Render

1. Sign in to [Render](https://render.com).
2. Click **New +** -> **Web Service**.
3. Connect your GitHub repository.
4. Set the configuration:
   - **Name**: `erc-tcet-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
5. Add **Environment Variables**:
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = `mongodb+srv://<user>:<password>@cluster.mongodb.net/erc_database?retryWrites=true&w=majority`
   - `FRONTEND_URL` = `https://<your-vercel-app>.vercel.app`
6. Click **Create Web Service**. Note your Render URL (e.g., `https://erc-tcet-backend.onrender.com`).

---

### Deploy Frontend on Vercel

1. Sign in to [Vercel](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository.
4. Configure Project Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Add **Environment Variable**:
   - `VITE_API_URL` = `https://erc-tcet-backend.onrender.com` (Your Render URL)
6. Click **Deploy**.

---

## 📡 API Documentation

### 1. Health Check
- **Endpoint**: `GET /api/health`
- **Response (`200 OK`)**:
```json
{
  "status": "ok",
  "message": "ERC Backend Running",
  "timestamp": "2026-09-12T17:30:00.000Z",
  "environment": "production"
}
```

### 2. Zephyr 2026 Delegate Registration
- **Endpoint**: `POST /api/zephyr/register`
- **Rate Limit**: 15 requests / 15 minutes per IP
- **Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "college": "TCET",
  "department": "Electronics",
  "year": "Second Year (SE)",
  "track": "UAV, Autonomous Flight & Drone Delivery Robot"
}
```
- **Success (`201 Created`)**:
```json
{
  "success": true,
  "message": "Registration successful",
  "registrationId": "ERC-ZEPHYR-54812"
}
```
- **Duplicate (`409 Conflict`)**:
```json
{
  "success": false,
  "message": "You are already registered for this event track.",
  "registrationId": "ERC-ZEPHYR-54812"
}
```

### 3. Workshop Registration
- **Endpoint**: `POST /api/workshops/register`
- **Rate Limit**: 15 requests / 15 minutes per IP
- **Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "college": "TCET",
  "workshop": "Drone Assembly & Betaflight Tuning"
}
```
- **Success (`201 Created`)**:
```json
{
  "success": true,
  "message": "Workshop registration successful",
  "registrationId": "ERC-WS-84192"
}
```
- **Duplicate (`409 Conflict`)**:
```json
{
  "success": false,
  "message": "You are already registered for this workshop.",
  "registrationId": "ERC-WS-84192"
}
```

---

## 🛡️ Production Security Checklist

- [x] Strict Helmet.js HTTP headers active.
- [x] Restrictive CORS configured for production domain.
- [x] Express rate limiting on general endpoints and registration forms.
- [x] MongoDB database credentials secured exclusively via environment variables.
- [x] Zero Three.js or heavy 3D WebGL overhead.
- [x] Production bundle optimized under 350kB with instant load times.
- [x] Responsive layout verified across mobile, tablet, and desktop viewports.
- [x] Complete Open Graph, Twitter cards, and SEO meta tags in `index.html`.

---

## 👥 Electronics & Robotics Club (ERC) TCET

- **Lead**: Gautam Thakur
- **Co-Lead**: Abhay Vishwakarma
- **Faculty Mentor**: Asst. Prof. Niketamoda
- **Instagram**: [instagram.com/erc.tcet](https://www.instagram.com/erc.tcet)
- **LinkedIn**: [linkedin.com/in/erc-tcet-61628b434](https://www.linkedin.com/in/erc-tcet-61628b434)
- **GitHub**: [github.com/erctcet-club](https://github.com/erctcet-club)
