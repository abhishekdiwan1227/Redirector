import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoutesHistory } from '../actions/searchActions';
import { checkForLoggedInUser } from '../actions/userActions';
import { Redirect } from 'react-router-dom';

class RoutingHistory extends Component {
    componentWillMount() {
        this.props.validLoggedInUser(sessionStorage.getItem("authToken"));
    }

    // componentDidMount() {
    //     this.props.getSeachedRoutes(this.props.userId);
    // }

    render() {
        return (
            <div className='d-flex justify-content-center'>
                <ul>
                  
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchedRoutes: state.search.searchedUris,
        userId: state.user.userId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSeachedRoutes: userId => dispatch(getRoutesHistory(userId)), 
        validLoggedInUser: token => dispatch(checkForLoggedInUser(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutingHistory);