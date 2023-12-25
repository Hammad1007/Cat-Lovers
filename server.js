const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'frontend')));

// --------------------------------------------------------------------------------

// Navbar links

// Define a route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'home.html'));
});

app.get('/cats', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'cats.html'));
});

// Define a route for the contact us page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'contact.html'));
});

// Define the route for the gallery page
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'gallery.html'));
});

// --------------------------------------------------------------------------------

// Pages to go to a particular cat page

// Define the route for the persian cats page
app.get('/persian', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'persian.html'));
});

// Define the route for the british short hair cat
app.get('/british', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'british.html'));
});

// Define the route for ragdoll cat
app.get('/ragdoll', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'ragdoll.html'));
});

// Define the route for the persian cats page
app.get('/scottish', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'scottish.html'));
});

// Define the route for the british short hair cat
app.get('/chartreux', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'chartreux.html'));
});

// Define the route for ragdoll cat
app.get('/britishlong', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'britishlong.html'));
});

// ------------------------------------------------------------------------

// Listening port at 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
