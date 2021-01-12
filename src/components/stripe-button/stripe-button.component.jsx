import React from 'react';
import StripeCheckOut from  'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51I8klcJK6hzL8Q8MmURtLWPpVaerYIpS6eHrSrjakm77vsIPDpMKgT2ZcawYPzaVZ1RrTL1p5nZ4Cvjy5Qb857El00u6XrgFW9";
   
    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }
   
    return (
        <StripeCheckOut
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;