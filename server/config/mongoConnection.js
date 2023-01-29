const { mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/adrixus-test")

mongoose.connection.on('connected', () => {
    console.log('Databse connect successfully.');
});

mongoose.connection.on('error', (err) => {
    console.log('Databse connect Error', err);
});