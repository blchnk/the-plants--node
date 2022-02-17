require("dotenv").config();
const express = require("express");
const app = express();

require('./db');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;

const mainRouter = require('./routes/mainRouter');

// *** *** *** *** *** *** //

app.use('/', mainRouter);

app.listen(PORT, () => {
    console.log('+-------------------+');
    console.log(`Server has been started on port ${PORT}`);
    console.log(`http://${HOST}:${PORT}`);
    console.log('+-------------------+');
});
