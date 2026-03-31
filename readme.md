# 🚀 Task Manager API (Node.js + Express + Docker + CI/CD)

## 📌 Project Overview
This project is a simple **Task Manager API** built using Node.js and Express.  
It allows users to create, view, and manage tasks.  

The project is containerized using Docker and includes a CI pipeline using GitHub Actions.

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- Docker
- GitHub Actions (CI/CD)

---

## 📂 Project Structure

project-root/
│── app.js
│── package.json
│── Dockerfile
│── README.md
└── .github/
└── workflows/
└── ci.yml


---

## 🚀 Features
- Add new tasks
- View all tasks
- Mark tasks as completed
- REST API support
- Dockerized application
- CI/CD pipeline using GitHub Actions

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
---

### 2️⃣ Install dependencies

npm install


---

### 3️⃣ Run the application

node app.js


👉 Open in browser:

http://localhost:5000


---

## 🧪 API Endpoints

### ➤ Home

GET /


### ➤ Add Task

POST /tasks

Body:
```json
{
  "title": "Your task"
}
➤ Get All Tasks
GET /tasks
➤ Complete Task
PUT /tasks/:id
🐳 Docker Setup
Build Image
docker build -t task-manager .
Run Container
docker run -p 5000:5000 task-

⚙️ CI/CD Pipeline
Implemented using GitHub Actions
Runs on every push to main branch
Steps:
Install dependencies
Build Docker image


🎯 Purpose of the Project

This project demonstrates:

Backend API development using Node.js
Containerization using Docker
Continuous Integration using GitHub Actions
👨‍💻 Author

Arjun Katare

📌 Future Improvements
Add database (MongoDB)
Add frontend UI
User authentication system