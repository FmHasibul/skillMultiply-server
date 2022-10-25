const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Assignment API running')
});

app.listen(port, () => console.log(`assignment server running on${port}`))



 