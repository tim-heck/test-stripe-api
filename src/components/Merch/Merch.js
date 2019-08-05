import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';
import Button from '@material-ui/core/Button';
import './Merch.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

class Merch extends Component {

    state = {
        cart: [
            
        ]
    };

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PRODUCTS' });
    }

    addToCart = (product) => {
        this.setState({
            cart: [
                ...this.state.cart,
                {
                    title: product.title,
                    description: product.description,
                    price: product.price_pennies,
                    image_url: product.image_url
                }
            ]
        });
    }

    goToCheckout = () => {
        this.props.dispatch({ type: 'CREATE_SESSION', payload: this.state.cart });
        this.props.dispatch({ type: 'ADD_TO_CART', payload: this.state.cart }); // may not need
        this.props.history.push('/checkout');
    }

    clearCart = () => {
        this.props.dispatch({ type: 'CLEAR_CART', payload: [] });
        this.setState({
            cart: []
        })
    }

    render() {
        const { classes } = this.props;
        // console.log('local cart:', this.state);
        return (
            <>
                <ul>
                    {this.props.reduxStore.merch.map(item =>
                        <li key={item.id}>
                            <img src={item.image_url} alt="" />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <h4>{item.price_pennies}</h4>
                            <Button variant="contained" className={classes.button} onClick={() => this.addToCart(item)}>
                                Add to Cart
                            </Button>
                        </li>
                    )}
                </ul>
                <CheckoutBtn cart={this.state.cart} clearCart={this.clearCart} goToCheckout={this.goToCheckout}/>
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(stateToProps)(Merch));