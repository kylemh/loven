import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import paypal from 'paypal-checkout';
import scriptLoader from 'react-async-script-loader';

class PayPalButton extends Component {
  constructor(props) {
    super(props);

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  static propTypes = {
    total: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    env: PropTypes.string.isRequired,
    commit: PropTypes.bool,
    client: PropTypes.objectOf({
      sandbox: PropTypes.string.isRequired,
      production: PropTypes.string.isRequired,
    }),
    onSuccess: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };

  state = {
    isVisible: false,
  };

  // Credit: https://www.robinwieruch.de/react-paypal-payment/
  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ isVisible: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const isLoadedButWasntLoadedBefore =
      !this.state.isVisible && !this.props.isScriptLoaded && isScriptLoaded;

    if (isLoadedButWasntLoadedBefore) {
      if (isScriptLoadSucceed) {
        this.setState({ isVisible: true });
      }
    }
  }

  render() {
    const {
      total,
      currency,
      env,
      commit,
      client,
      onSuccess,
      onError,
      onCancel,
    } = this.props;

    const { isVisible } = this.state;

    const payment = () =>
      paypal.rest.payment.create(env, client, {
        transactions: [
          {
            amount: {
              total,
              currency,
            },
          },
        ],
      });

    const onAuthorize = (data, actions) =>
      actions.payment.execute().then(() => {
        const payment = {
          paid: true,
          cancelled: false,
          payerID: data.payerID,
          paymentID: data.paymentID,
          paymentToken: data.paymentToken,
          returnUrl: data.returnUrl,
        };

        onSuccess(payment);
      });

    const ReactButton = paypal.Button.driver('react', {
      React: window.React,
      ReactDOM: window.ReactDOM,
    });

    return (
      <div>
        {isVisible && (
          <ReactButton
            env={env}
            client={client}
            commit={commit}
            payment={payment}
            onAuthorize={onAuthorize}
            onCancel={onCancel}
            onError={onError}
          />
        )}
      </div>
    );
  }
}

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(
  PayPalButton
);
