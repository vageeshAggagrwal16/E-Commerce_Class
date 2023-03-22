const express = require('express');
let path = require('path');
const mongoose = require('mongoose');
const app = express();

mongoose.set('strictQuery', 'true');
mongoose.connect('mongodb://localhost:27017/shopping-database')
    .then(() => { console.log('database is connected motherfuckers') })
    .catch((err) => { console.log(err) })


let port = 5000;
app.listen(port, () => {
    console.log(`server connected at port ${port}`)
})
