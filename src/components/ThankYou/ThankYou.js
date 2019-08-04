import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

class ThankYou extends Component {

    redirectToHome = () => {
        this.props.history.push('/');
    }

    render() {
        // const { classes } = this.props;
        return (
            <>
                <h2>Thank you!</h2>
                <button onClick={this.redirectToHome}>Back to Home</button>
            </>
        );
    }
}

// const stateToProps = (reduxStore) => ({
//     reduxStore
// })

export default withStyles(styles)(ThankYou);