const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();
const STRIPE_API_TEST_SKEY = process.env.STRIPE_API_TEST_SKEY;
const stripe = require("stripe")(STRIPE_API_TEST_SKEY);

router.post('/', (req, res) => {
    stripe.checkout.sessions.create({
        success_url: "https://example.com/success",
        cancel_url: "https://example.com/cancel",
        payment_method_types: ["card"],
        line_items: [{
            name: "T-shirt",
            description: "Comfortable cotton t-shirt",
            amount: 1500,
            currency: "usd",
            quantity: 2
        }]
    }, function (err, session) {
        console.log('Made it after post');
        if (err === null) {
            // router.get('/', (req, res) => {
            //     console.log(session.id);
                stripe.checkout.sessions.retrieve(
                    session.id,
                    function (err, session) {
                        if (err === null) {
                            console.log(session);
                            res.sendStatus(200);
                        } else {
                            console.log('GET', err);
                            res.sendStatus(500);
                        }
                    }
                );
            // })
        } else {
            console.log('POST', err);
            res.sendStatus(500);
        }
    });
})

// (async () => {
//     const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items: [{
//             name: 'T-shirt',
//             description: 'Comfortable cotton t-shirt',
//             images: ['https://example.com/t-shirt.png'],
//             amount: 500,
//             currency: 'usd',
//             quantity: 1,
//         }],
//         success_url: 'https://example.com/success',
//         cancel_url: 'https://example.com/cancel',
//     });
// })();

module.exports = router;