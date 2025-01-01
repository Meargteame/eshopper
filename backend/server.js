const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/initDb');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.get('/products', (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.send(rows);
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
