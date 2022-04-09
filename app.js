const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/dbConnection");
require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json())

dbConnection();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(process.env.PORT, () => {
    console.log("Servidor creado en el puerto", process.env.PORT);
})