import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

class CheckoutBtn extends Component {

    goToCheckout = () => {
        this.props.dispatch({ type: 'CREATE_SESSION' });
        this.props.history.push('/checkout');
    }

    render() {
        const { classes } = this.props;

        return (
            <Button variant="contained" color="primary" className={classes.button} onClick={this.goToCheckout}>
                Go to Cart
            </Button>
        );
    }
}

export default withStyles(styles)(connect()(CheckoutBtn));
