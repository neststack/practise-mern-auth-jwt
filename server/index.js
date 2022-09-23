const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<password>', process.env.DB_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('DB connection successful');
    })
    .catch((err) => console.log('DB error', err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json({ status: 'ok' });
    } catch (error) {
        console.log(error);
        res.json({ status: 'error', error });
    }
});

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });

    if (user) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            'secret123'
        );

        console.log('Login success:', user);
        return res.json({ status: 'ok', user: token });
    } else {
        console.log('Login failed');
        return res.json({ status: 'error', user: false });
    }
});

app.listen(5000, () => {
    console.log('Server started on 5000');
});
