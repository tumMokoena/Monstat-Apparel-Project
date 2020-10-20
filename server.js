const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const _ = require('lodash');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const connectDB = require('./config/dbConn');

//load environment variables
dotenv.config({ path: './config/config.env' });

//initialise / create express object
const app = express();

//use json
app.use(express.json());

//use express body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//file upload middleware
app.use(fileUpload({
  createParentPath:true ,
   limits: { 
        fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
    },
}));

app.use(cors());
app.use(morgan('dev'));

//express router
const router = express.Router();

//middleware router [routes to controller]
app.use('/shop/v1', userRoutes);
app.use('/admin/v1', adminRoutes);

//express handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,

      allowProtoMethodsByDefault: true,
    },
  })
);
app.set('view engine', 'handlebars');

//require path to the project
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

connectDB();

module.exports = app;
