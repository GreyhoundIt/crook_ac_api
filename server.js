const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// BodyParser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to DB
mongoose.connect(db, { useNewUrlParser: true })
  .then(()=> console.log('Mongo DB Connected'))
  .catch(err =>console.log(err));

// use routes
app.use('/api/races',  require('./routes/api/races'));
app.use('/api/sessions',  require('./routes/api/workouts'));

//Serve static assets if in prod
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Running on port ${port}`));
