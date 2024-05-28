const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log('This is a Fake Back-End Server');
    res.send('This is a Fake Back-End Server')
});

app.post('/user', (req, res) => {
    res.send(req.body);
});

app.listen(5000, () => {
    console.log('App Listening at port 5000')
});

module.exports = app;
