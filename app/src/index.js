const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express()
const port = 3000
// Routes APi
const indexRoutes = require('./routes/index');
// const postRoute = require('./routes/post.routes');
const userRoute = require('./routes/userRoute.routes');

var corsOptions = {
    origin: `http://localhost:${port}`
};
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(indexRoutes);
app.use(userRoute);
app.use(cors(corsOptions));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


module.exports = app;