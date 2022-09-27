const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({ path: './config.env' });
const DB = process.env.DB.replace('<password>', process.env.DB_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('DB connection successful');
    })
    .catch((err) => console.log('DB error', err));

app.get('/', (req, res) => {
    res.send('hellow world');
});

app.post('/api/register', async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json({
            status: 'ok',
            body: {
                name: req.body.name,
                email: req.body.email,
            },
        });
    } catch (err) {
        res.json({
            status: 'error',
            message: err,
        });
    }
});

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    loca;

    if (user) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            'secret123'
        );
        return res.json({ status: 'ok', user: token });
    } else {
        return res.json({ status: 'error', user: false });
    }
});

app.get('/api/quote', async (req, res) => {
    const token = req.headers['x-access-token'];
    try {
        const decoded = jwt.verify(token, 'secret123');
        const email = decoded.email;
        const user = await User.findOne({ email: email });

        return res.json({ status: 'ok', quote: user.quote });
    } catch (error) {
        console.log(error);
        res.json({ status: 'error', error: 'invalid token' });
    }
});

app.post('/api/quote', async (req, res) => {
    const token = req.headers['x-access-token'];
    try {
        const decoded = jwt.verify(token, 'secret123');
        const email = decoded.email;
        const user = await User.updateOne(
            { email: email },
            { $set: { quote: req.body.quote } }
        );

        return { status: 'ok' };
    } catch (error) {
        console.log(error);
        res.json({ status: 'error', error: 'invalid token' });
    }
});

app.listen(5000, () => {
    console.log('Server started on 5000');
});
