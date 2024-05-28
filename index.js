const express = require('express');
const serverless = require("serverless-http");

// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => {
//     console.log('This is a Fake Back-End Server');
//     res.send('This is a Fake Back-End Server')
// });

// app.post('/user', (req, res) => {
//     res.send(req.body);
// });

// app.listen(5000, () => {
//     console.log('App Listening at port 5000')
// });

const api = express();

const router = express.Router();
router.get("/", (req, res) => {
    console.log('========== Invoked ==========')
    res.send("Hello World!")
});

api.use("/.netlify/functions/api", router);

const handler = serverless(api);
module.exports.handler = handler;