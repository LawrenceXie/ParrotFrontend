import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Checkout = () => {
  const publishableKey = "pk_test_LE1dkV4q4zzaKcE2rWKXVr06";

  const onToken = token => {
    const body = {
      amount: 999,
      token: token
    };

    axios
      .post("http://localhost:8000/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
    <StripeCheckout
      label="Order Package" //Component button text
      name="Package Parrot" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Order Package" //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};

export default Checkout;
