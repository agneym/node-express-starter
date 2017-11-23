const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.load({ path: '.env' });

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(compression());

app.listen(app.get('port'), ()=>{
  console.log(`App running on port ${app.get('port')}`);
})