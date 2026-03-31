const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ IMPORT ROUTER EXPLICITLY
const taskRoutes = require("./routes/taskRoutes");

// ✅ MOUNT ROUTER
app.use("/tasks", taskRoutes);

// ✅ Optional root route
app.get("/", (req, res) => {
  res.send("Student Task Dashboard API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});