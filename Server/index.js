//SERVER INDEX
const express = require('express');
const cors = require('cors');
const carQuery = require('./inventory-methods');
const userQuery = require('./users-methods');
const connectDb = require('./connection');
const app = express()
const port = 5000

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

app.get('/users', async (req, res) => {
    if (res.statusCode === 200)
    {
        res.send(await userQuery.getData());
    }
    else
    {
        console.log(res.statusCode);
    }
});

app.post('/users', (req, res) => {
    if (res.statusCode === 200)
    {
        res.send(userQuery.postData(req.body));
    }
    else
    {
        console.log(res.statusCode);
    }
});

app.post('/api/ToDoItems', (req, res) => {
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
    console.log(`Example app listening at https://localhost:${port}`)
    connectDb()
        .then(() => {
            console.log("MongoDB Connected!");
        });
})