# Student Task Dashboard

## Project Overview

Student Task Dashboard is a full-stack web application that helps students manage their daily tasks efficiently. Users can add, edit, delete, search, and mark tasks as completed. The application also supports task priority, deadline tracking, and dashboard statistics.

---

## Live Project Links

* **Live Website (Frontend):** https://sowmya534.github.io/student-task-dashboard-project/
* **Backend API:** https://student-task-dashboard-xlln.onrender.com/tasks
* **GitHub Repository:** https://github.com/sowmya534/student-task-dashboard-project

---

## Features

* Add Task
* View Tasks
* Edit Task
* Delete Task with confirmation
* Mark Task as Completed
* Task Priority (High / Medium / Low)
* Deadline Tracking with color warning
* Task Status (Pending / Completed)
* Search Tasks
* Dashboard Statistics (Total, Completed, Pending)
* Responsive User Interface
* Full Stack Deployment

---

## Technologies Used

| Frontend   | Backend    | Database | Deployment   |
| ---------- | ---------- | -------- | ------------ |
| HTML       | Node.js    | SQLite   | GitHub Pages |
| CSS        | Express.js |          | Render       |
| JavaScript |            |          |              |

---

## System Architecture

User → Frontend → Backend API → Database → Backend → Frontend

The frontend communicates with the backend using Fetch API and REST API calls. The backend processes requests and interacts with the SQLite database.

---

## Database Table Structure

**Table Name: tasks**

| Column      | Type    | Description      |
| ----------- | ------- | ---------------- |
| id          | INTEGER | Primary Key      |
| title       | TEXT    | Task Title       |
| description | TEXT    | Task Description |
| deadline    | DATE    | Task Deadline    |
| priority    | TEXT    | Task Priority    |
| completed   | BOOLEAN | Task Status      |

---

## API Endpoints

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /tasks     | Get all tasks |
| POST   | /tasks     | Add new task  |
| PUT    | /tasks/:id | Update task   |
| DELETE | /tasks/:id | Delete task   |

---

## Enhancements Made

* Added task priority feature
* Added search functionality
* Added dashboard statistics
* Added edit task feature
* Added delete confirmation
* Added deadline color warning
* Improved UI design

---

## Conclusion

This project demonstrates a full-stack web application with CRUD operations, REST API integration, database management, and cloud deployment.

---

## Author

**Name:** Bokka Sowmya
**Project:** Student Task Dashboard
**Type:** Full Stack Web Application
