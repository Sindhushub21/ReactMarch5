const Inventory = require('./Models/inventory.model');

const getData = async () => {
    var results = [];
    await Inventory.find({})
        .then(res => {
            res.forEach(item => {
                results.push(item)
            });
        });
    return results;
};

const postData = (data) => {
    console.log(`5th inventory-methods:postData() data = ${JSON.stringify(data)}`);
    return Inventory.insertMany(data);
}

module.exports = {getData, postData};