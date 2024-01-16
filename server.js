const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.get('/all', (req, res) => {
  res.render('all'); // , { figurine/figurines?? }
});

app.get('/xenos', (req, res) => {
  res.render('xenos'); // , { figurine/figurines?? }
});

app.get('/necron', (req, res) => {
  res.render('necron'); // , { figurine/figurines?? }
});

app.get('/chaos', (req, res) => {
  res.render('chaos'); // , { figurine/figurines?? }
});

app.get('/imperial-armies', (req, res) => {
  res.render('imperialarmies'); // , { figurine/figurines?? }
});

app.get('/space-marines', (req, res) => {
  res.render('spacemarines'); // , { figurine/figurines?? }
});

app.get('/aeldari', (req, res) => {
  res.render('aeldari'); // , { figurine/figurines?? }
});



app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('http://localhost:3001'));
});
