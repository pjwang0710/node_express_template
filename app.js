require('dotenv').config();
const {PORT, NODE_ENV, API_VERSION} = process.env;
const port = PORT;

// Express Initialization
const express = require('express');
const cors = require('cors');
const app = express();

app.set('json spaces', 2);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// CORS allow all
app.use(cors());

// API routes
app.use('/api/' + API_VERSION,
    [
        require('./server/routes/forms')
    ]
);

// Page not found
// app.use(function(req, res, next) {
//     res.status(404).sendFile(__dirname + '/public/404.html');
// });

// Error handling
// app.use(function(err, req, res, next) {
//     console.log(err);
//     res.status(500).send('Internal Server Error');
// });

if (NODE_ENV != 'production'){
    app.listen(port, () => {console.log(`Listening on port: ${port}`);});
}

module.exports = app;