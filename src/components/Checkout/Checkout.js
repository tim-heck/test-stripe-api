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

    render() {
        // const { classes } = this.props;
        return (
            <>
                {/* <StripeCheckout stripeKey="pk_test_7jYMjDzgFwCy7pMi8GaI0iRm00KGSaLtmj" token={this.handleToken} /> */}
                <button onClick={this.handleClick}>Get session</button>
                {this.props.reduxStore.checkoutSession}
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(stateToProps)(Checkout));