const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const courses = require('./courses.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Assignment API running')
});

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const course = courses.find(SC => SC.id == id);
    res.send(course)
})


app.listen(port, () => console.log(`assignment server running on ${port}`))



 