# MiniSocial Frontend 🎨

Frontend application for **MiniSocial**, a simple social media web app where users can login, create posts, like posts, and comment on posts.

Built using **React.js, Material UI, Axios, Context API, Framer Motion**.

---

## Features ✨

* User Login 🔐
* Create Post (text + image URL) 📝📸
* View Feed 📰
* Like Posts ❤️
* Comment on Posts 💬
* Profile Page 👤
* Dark Mode 🌙
* Responsive UI 📱
* Smooth Animations ⚡

---

## Tech Stack 🛠

* React.js (Hooks)
* Material UI (MUI)
* Axios
* Context API
* Framer Motion
* React Router DOM

---

## Project Structure 📁

```id="dpl3sk"
frontend
│
├── src
│   ├── api
│   │   └── axios.js
│   │
│   ├── components
│   │   ├── CreatePost.jsx
│   │   ├── PostCard.jsx
│   │   ├── CommentBox.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context
│   │   └── AuthContext.jsx
│   │
│   ├── pages
│   │   ├── Login.jsx
│   │   ├── Feed.jsx
│   │   └── Profile.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## Installation ⚙️

### 1. Clone repository

```id="4s1e9v"
git clone https://github.com/yourusername/minisocial-frontend.git

cd minisocial-frontend
```

### 2. Install dependencies

```id="8gxf1r"
npm install
```

---

## Environment Setup 🔧

Update API base URL:

📁 src/api/axios.js

```id="v8tntv"
import axios from "axios";

export default axios.create({

 baseURL: "https://your-backend-url.onrender.com/api/v1"

});
```

---

## Run Project ▶️

```id="7hhx2g"
npm run dev
```

App runs on:

```id="if8gtv"
http://localhost:5173
```

---

## Pages 📄

### Login Page

User enters email and password to login.

---

### Feed Page

* View all posts
* Like posts
* Comment on posts

---

### Profile Page

* Shows logged-in user's posts
* Displays post count

---

## API Integration 🔗

Backend API endpoints used:

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /auth/login        | Login user    |
| POST   | /posts             | Create post   |
| GET    | /posts             | Get all posts |
| PUT    | /posts/:id/like    | Like post     |
| PUT    | /posts/:id/comment | Add comment   |

---

## Example Post JSON 📦

```id="fm1z48"
{
 "text": "Goa trip",
 "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
}
```

---

## Deployment 🌍

Frontend deployed on:

Vercel / Netlify

Example:

https://minisocial.vercel.app

---

## Author 👨‍💻

Aftab Ansari

MCA Student
Frontend + Backend Developer

Skills:
React.js
Node.js
MongoDB
Express.js
REST API

---

## License 📄

MIT License
