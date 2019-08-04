import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

const stripe = window.Stripe("pk_test_7jYMjDzgFwCy7pMi8GaI0iRm00KGSaLtmj");
console.log(stripe);

class Checkout extends Component {

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
            console.log(result.error.message);
        });
        
    }

    checkSession = () => {
        const { classes } = this.props;
        if (this.props.reduxStore.checkoutSession.id){
            return (
                <Button variant="contained" color="primary" className={classes.button} onClick={this.goToCheckout}>
                    Go to Checkout
                </Button>
            );
        }
    }

    render() {
        return (
            <>
                {this.checkSession()}
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(stateToProps)(Checkout));