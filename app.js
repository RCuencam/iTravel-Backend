const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(process.env.PORT, () => {
    console.log("Servidor creado en el puerto", process.env.PORT);
})