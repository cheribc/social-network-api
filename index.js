const express = require('express');
const db = require('./config/connection');
const routes = require('./routes')


const cwd = process.cwd();
// Initialize express

const PORT = process.env.PORT || 3001;
const app = express();

// Indicate which activity's server is running in the terminal

const activity = cwd.includes('social-network-api')
    ? cwd.split('/social-network-api')[1]
        : cwd;

app.use(express.urlencoded({ extended: true }));        
app.use(express.json());
app.use(routes);

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} running on port ${PORT}!`);
    });
});






