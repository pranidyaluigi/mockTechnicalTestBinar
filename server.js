require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const http = require("http");

const app = express();
const server = http.createServer(app);

//import routes
const users = require("./routes/users");
const data = require("./routes/data");

//enable req.body (json and urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//enable req.body (form-data)
app.use(fileUpload());
app.use(express.static("public"));

//make routes
app.use("/users", users);
app.use("/data", data);

//run the server
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server running on port ${port}...`));

module.exports = app;
