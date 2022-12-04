const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const classes = require('./data/classes.json');
const classesDetails = require('./data/classesDetails.json');

// APIs
app.get('/', (req, res) => {
    res.send("Schoolocity API running");
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/classes', (req, res) => {
    res.send(classes);
})

app.get('/classes/:id', ({params}, res) => {
    const id = params.id;
    const classDetails = classesDetails.find(cd => cd.id === id);
    res.send(classDetails);
})

// Run Server
app.listen(port, () => {
    console.log("Schoolocity Server running on port:", port);
})