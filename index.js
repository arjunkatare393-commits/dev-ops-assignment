const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

// Home route
app.get('/', (req, res) => {
    res.send('Task Manager API is running 📚');
});

// Add task
app.post('/tasks', (req, res) => {
    const { title, deadline } = req.body;

    const newTask = {
        id: tasks.length + 1,
        title,
        deadline,
        completed: false
    };

    tasks.push(newTask);
    res.json({ message: "Task added ✅", task: newTask });
});

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Get pending tasks
app.get('/tasks/pending', (req, res) => {
    const pending = tasks.filter(t => !t.completed);
    res.json(pending);
});

// Mark task as completed
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.completed = true;
    res.json({ message: "Task completed ✅", task });
});

// Delete task
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({ message: "Task deleted 🗑️" });
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});