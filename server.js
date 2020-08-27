const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const path = require('path');
const userRoutes = require('./routes/user');

//load environment variables
dotenv.config({ path: './config/config.env' });

//initialise / create express object
const app = express();

//express router
const router = express.Router();

//middleware router
app.use('/shop/v1', userRoutes);

//express handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//require path to the project
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

module.exports = app;
