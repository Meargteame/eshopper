const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/database.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        db.run(`
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                price REAL NOT NULL,
                description TEXT,
                image TEXT
            );
        `, (err) => {
            if (err) {
                console.error('Error creating table', err.message);
            } else {
                console.log('Database initialized');
            }
        });
    }
});


const insertProducts = () => {
    db.run(`
        INSERT INTO products (name, price, description, image)
        VALUES 
        ('Product 1', 9.99, 'This is Product 1', 'https://via.placeholder.com/150'),
        ('Product 2', 19.99, 'This is Product 2', 'https://via.placeholder.com/150'),
        ('Product 3', 29.99, 'This is Product 3', 'https://via.placeholder.com/150');
    `, (err) => {
        if (err) console.error('Error inserting data:', err.message);
    });
};

// Uncomment this to seed the database with initial data
// insertProducts();

module.exports = db;
