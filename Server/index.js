//SERVER INDEX
const express = require('express');
const cors = require('cors');
const carQuery = require('./inventory-methods');
const connectDb = require('./connection');
const app = express()
const port = 8080

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    if (res.statusCode === 200)
    {
        res.send(await carQuery.getData());
    }
    else
    {
        console.log(res.statusCode);
    }
});

app.post('/postCar', (req, res) => {
    console.log(`3rd req.body = ${JSON.stringify(req.body)}`);
    if (res.statusCode === 200)
    {
        res.send(carQuery.postData(req.body));
    }
    else
    {
        console.log(res.statusCode);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    connectDb()
        .then(() => {
            console.log("MongoDB Connected!");
        });
})