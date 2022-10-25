const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const courses = require('./courses.json')

app.get('/', (req, res) => {
    res.send('Assignment API running')
});
app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => console.log(`assignment server running on ${port}`))



 