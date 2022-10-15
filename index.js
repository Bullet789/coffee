
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
app.use(require('./route/routers.coffee'))


mongoose.connect('mongodb+srv://deni:admin@cluster0.7wdvqlq.mongodb.net/coffee?retryWrites=true&w=majority',
(err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('подключено');
    }
})

app.listen(3000,() => console.log('http://:'))