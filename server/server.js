const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const stripeRouter = require('./routes/stripe.router');
const port = process.env.PORT || 5000;

require('dotenv').config();
// const STRIPE_API_TEST_SKEY = process.env.STRIPE_API_TEST_SKEY;
// const stripe = require("stripe")(STRIPE_API_TEST_SKEY);

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/checkout', stripeRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});