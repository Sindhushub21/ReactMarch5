const mongoose = require('mongoose');
const connection = "mongodb://172.20.80.1:27017/carInventory?authSource=admin";
// const connection = "mongodb://mongodb:27017/carInventory?authSource=admin";

const connectDb = () => {
    return mongoose.connect(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: 'root',
        pass: 'example'
    });
};

module.exports = connectDb;