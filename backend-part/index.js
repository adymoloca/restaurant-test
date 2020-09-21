//importare dependente
const express = require('express')
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');

mongoose.connect('mongodb+srv://Leibiuc:leibiucpass@sdb-restaurant.wyb6m.mongodb.net/dashboard?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('connected to database Dashboard (0_0)')
  }).catch((err) => {
    console.log('connection failed (dashboard)')
  });

//accesare folder cu rute
const dashboardApp = require('./APPS/dashboard')
const clientApp = require('./APPS/clientApp')

const app = express();

app.use(cors())

app.use(bodyparser.json());

app.use('/api/admin', dashboardApp);
app.use('/api/client',clientApp)

app.listen(4000);