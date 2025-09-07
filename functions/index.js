const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.secret);

exports.createPaymentIntent = functions.https.onCall(async (data, context) => {

    // Check if user is authenticated
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'You must be logged in to make a payment.'
        );
    }

    const { amount, currency } = data;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            automatic_payment_methods: { enabled: true }
        });

        return { clientSecret: paymentIntent.client_secret };
    }
    catch (error) {
        console.error(error.message);
        throw new functions.https.HttpsError("internal", error.message);
    }
})