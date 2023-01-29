require('dotenv').config()
const { mongoose } = require("mongoose");
mongoose.connect(process.env.mongoURL,{ dbName: process.env.dbName })

mongoose.connection.on('connected', () => {
    console.log('Databse connect successfully.');
});

mongoose.connection.on('error', (err) => {
    console.log('Databse connect Error', err);
});