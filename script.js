const API_URL = "https://student-task-dashboard-xlln.onrender.com/tasks";
const taskList = document.getElementById("taskList");

let editId = null;

// Load tasks
async function loadTasks() {
  taskList.innerHTML = "Loading tasks...";

  const response = await fetch(API_URL);
  const tasks = await response.json();

  if (tasks.length === 0) {
    taskList.innerHTML = "No tasks available";
    return;
  }

  taskList.innerHTML = "";

  // Stats
  document.getElementById("total").innerText = tasks.length;
  document.getElementById("completed").innerText = tasks.filter(t => t.completed).length;
  document.getElementById("pending").innerText = tasks.filter(t => !t.completed).length;

  tasks.forEach(task => {
    const li = document.createElement("li");

    // Deadline color
    let today = new Date().toISOString().split("T")[0];
    let deadlineColor = task.deadline < today ? "red" : "black";

    // Priority class
    let priorityClass = "";
    if (task.priority === "High") priorityClass = "high";
    if (task.priority === "Medium") priorityClass = "medium";
    if (task.priority === "Low") priorityClass = "low";

    li.innerHTML = `
      <b>${task.title}</b><br>
      ${task.description}<br>
      Deadline: <span style="color:${deadlineColor}">${task.deadline}</span><br>
      Priority: <span class="${priorityClass}">${task.priority || "None"}</span><br>
      Status: <span class="${task.completed ? 'status-done' : 'status-pending'}">
        ${task.completed ? 'Completed' : 'Pending'}
      </span><br>
      <button onclick="editTask(${task.id}, '${task.title}', '${task.description}', '${task.deadline}', '${task.priority}')">Edit</button>
      <button onclick="markComplete(${task.id})">Complete</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;

    taskList.appendChild(li);
  });
}

loadTasks();

// Add or Edit Task
async function addTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const deadline = document.getElementById("deadline").value;
  const priority = document.getElementById("priority").value;

  if (editId) {
    await fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, deadline, priority })
    });
    editId = null;
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, deadline, priority })
    });
  }

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("deadline").value = "";

  loadTasks();
}

// Edit Task
function editTask(id, title, description, deadline, priority) {
  document.getElementById("title").value = title;
  document.getElementById("description").value = description;
  document.getElementById("deadline").value = deadline;
  document.getElementById("priority").value = priority;

  editId = id;
}

// Mark Complete
async function markComplete(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: true })
  });

  loadTasks();
}

// Delete Task with confirmation
async function deleteTask(id) {
  if (confirm("Are you sure you want to delete this task?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadTasks();
  }
}

// Search Task
function searchTask() {
  const value = document.getElementById("search").value.toLowerCase();
  const items = document.querySelectorAll("li");

  items.forEach(item => {
    item.style.display = item.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
}