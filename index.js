const express = require('express');
const db = require('./config/connection');
const routes = require('./routes')

// const cwd = process.cwd();
// Initialize express

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(routes);

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
  app.listen(3000)





