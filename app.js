const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mainRoutes = require("./routes");
const projects_repo = require("./data/repository");
const createError = require('http-errors');
const port = process.env.PORT || 3000;

const app = express();
app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.use(projects_repo);

app.use(mainRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    res.locals.error = err;

    //Log out to console
    console.error(err);

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
   console.log(`The application is running on localhost:${port}!`);
});