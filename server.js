const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = __dirname + '/app/views/';
const app = express();
require('dotenv').config()
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(express.static(path));

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '50mb' }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// simple route
require("./app/routes/songdata.routes")(app);
app.get('/*', function (req, res) {
    res.sendFile(path + "index.html");
});

//CONNECT
const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });