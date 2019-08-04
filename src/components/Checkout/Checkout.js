import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// import StripeCheckout from 'react-stripe-checkout';

const stripe = window.Stripe("pk_test_7jYMjDzgFwCy7pMi8GaI0iRm00KGSaLtmj");
console.log(stripe);

const styles = theme => ({

});

class Checkout extends Component {

    state = {

    }

    // handleToken = (token, addresses) => {
    //     console.log(token, addresses);
    // }

    handleClick = () => {
        this.props.dispatch({type: 'CREATE_SESSION'});
    }

    goToCheckout = () => {
        stripe.redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId: this.props.reduxStore.checkoutSession.id
        }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            console.log(result);
            // console.log(result.error.message);
        });
        
    }

    checkSession = () => {
        if (this.props.reduxStore.checkoutSession.id){
            return (
                <button onClick={this.goToCheckout}>Go to Checkout</button>
            );
        }
    }

    render() {
        // const { classes } = this.props;
        return (
            <>
                {/* <StripeCheckout stripeKey="pk_test_7jYMjDzgFwCy7pMi8GaI0iRm00KGSaLtmj" token={this.handleToken} /> */}
                <button onClick={this.handleClick}>Get session</button>
                {this.checkSession()}
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(stateToProps)(Checkout));