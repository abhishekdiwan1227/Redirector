import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoutesHistory } from '../actions/searchActions';
import { checkForLoggedInUser } from '../actions/userActions';
import { Redirect } from 'react-router-dom';

class RoutingHistory extends Component {
    componentWillMount() {
        this.props.validLoggedInUser(sessionStorage.getItem("authToken"));
    }

    componentDidMount() {
        if (this.props.isUserLoggedIn) {
            this.props.getSeachedRoutes(this.props.userId);
        }
    }

    render() {
        if (!this.props.isUserLoggedIn) {
            return <Redirect to='/login' />
        }
        if (this.props.searchedRoutes.length > 0) {
            return (
                <div className='d-flex justify-content-center'>
                    <ul className="list-unstyled">
                        {this.props.searchedRoutes.map(route =>
                            <li key={route.url}>{route.key}</li>
                        )}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div className='d-flex justify-content-center'>
                    No Records
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        searchedRoutes: state.search.searchedUris,
        userId: state.user.userId,
        isUserLoggedIn: state.user.isLoggedIn,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSeachedRoutes: userId => dispatch(getRoutesHistory(userId)),
        validLoggedInUser: token => dispatch(checkForLoggedInUser(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutingHistory);