const express = require('express');
const router = express.Router();
// const axios = require('axios');

require('dotenv').config();
const STRIPE_API_TEST_SKEY = process.env.STRIPE_API_TEST_SKEY;
const stripe = require("stripe")(STRIPE_API_TEST_SKEY);

router.post('/', (req, res) => {
    stripe.checkout.sessions.create({
        success_url: "http://localhost:3000/#/thank-you",
        cancel_url: "http://localhost:3000/#/checkout",
        payment_method_types: ["card"],
        line_items: [{
            name: "Stay Greasy T-shirt",
            description: "The greasiest shirt you can own.",
            amount: 1000,
            currency: "usd",
            quantity: 1
        }]
    }, function (err, session) {
        console.log('Made it after post');
        if (err === null) {
            stripe.checkout.sessions.retrieve(
                session.id,
                function (err, session) {
                    if (err === null) {
                        console.log('GET session:', session);
                        console.log('GET display_items:', session.display_items);
                        res.send(session);
                        // res.sendStatus(200);
                    } else {
                        console.log('GET', err);
                        res.sendStatus(500);
                    }
                }
            );
        } else {
            console.log('POST', err);
            res.sendStatus(500);
        }
    });
})

// router.get('/', (req, res) => {
//     console.log(session.id);
//     stripe.checkout.sessions.retrieve(
//         session.id,
//         function (err, session) {
//             if (err === null) {
//                 console.log('GET session:', session);
//                 res.sendStatus(200);
//             } else {
//                 console.log('GET', err);
//                 res.sendStatus(500);
//             }
//         }
//     );
// })

module.exports = router;