const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001; // Different port to avoid conflicts

app.use(cors());
app.use(bodyParser.json());

let users = []; // This will hold our "database"

// Create a new user
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

// Read all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Read a specific user
app.get('/users/:email', (req, res) => {
    const email = req.params.email;
    const user = users.find(u => u.email === email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});



app.listen(PORT, () => {
    console.log(`Mock server is running on http://localhost:${PORT}`);
});
