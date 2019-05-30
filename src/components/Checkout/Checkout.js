import React, { Component } from 'react';
import { Button } from '../Button';

class Checkout extends Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_i27dZgga81biOwh7ggQtOg1W', {
      betas: ['checkout_beta_4'],
    });
  }

  redirectToCheckout = async () => {
    const { error } = await this.stripe.redirectToCheckout({
      successUrl: 'https://lovenbakeshop.com/thank_you/',
      cancelUrl: 'https://lovenbakeshop.com/subscribe/',
    });

    if (error) {
      console.warn('Error:', error);
    }
  };

  render() {
    return (
      <Button onClick={this.redirectToCheckout} theme="secondary">
        Checkout
      </Button>
    );
  }
}

export default Checkout;
