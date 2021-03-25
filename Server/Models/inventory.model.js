const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    owner: String,
    year: Number,
    make: String,
    model: String,
    color: String,
    price: Number,
    user: String,
    img: String,
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;