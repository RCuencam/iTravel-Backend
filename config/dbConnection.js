const mongoose = require("mongoose");

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Conexión a la base de datos exitosa!');
    }).catch(e => {
        console.log("Ocurrió un error en la conexión con la base de datos", e)
    })
}

module.exports = dbConnection;