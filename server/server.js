const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

const stripe = require('stripe')('secret_key');     // add secret key here

app.post('/checkout', async (req, res) => {
    try{
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.line_items.map((item) => ({
                currency: 'usd',
                product_data: {
                    name: item.name,
                    images: [item.product]
                },
                unit_amount: item.price * 100,
            })),
            mode: 'payment',
            success_url: 'http://localhost:4242/success.html',
            cancel_url: 'http://localhost:4242/cancel.html',
        });
        res.status(200).json(session);
    } catch (error) {
        next(error);
    }
});

app.listen(4242, () => console.log('Running on port 4242'));