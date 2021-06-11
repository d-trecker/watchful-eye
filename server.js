const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');

//Middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// For not found request. 
app.use((req, res) => {
    res.status(404).end();
});

db.connect((err) => {
    if (err) throw err;
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});