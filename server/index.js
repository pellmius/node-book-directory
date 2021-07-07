const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const booksAPI = require('./api/books');
const book = require('./models/book');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8000;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.nvkcn.mongodb.net/main?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/books', booksAPI);

app.listen(PORT , async () => {
    console.log(`App running in port ${PORT}`)
});


