import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. 

    fetch('/save-stripe-token', {
        method: 'POST',
        body: JSON.stringify(token),
      }).then(response => {
        response.json().then(data => {
          alert(`We are in business, ${data.email}`);
        });
      });
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_LE1dkV4q4zzaKcE2rWKXVr06"
        token={this.onToken}
      />
    )
  }
}