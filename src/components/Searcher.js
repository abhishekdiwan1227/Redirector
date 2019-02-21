import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForLoggedInUser } from '../actions/userActions'
import { addUriToClient, showUrlSearches, getRoutesHistory } from '../actions/searchActions'

class Searcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: ''
        };
    }

    componentWillMount() {
        this.props.validLoggedInUser(sessionStorage.getItem("authToken"));
    }

    handleUrlChange = event => {
        this.setState({ uri: event.target.value })
    }

    searchWebUri = event => {
        var uri = this.state.uri;
        this.props.searchUri(uri, this.props.userId);
        window.location.href = uri;

    }

    handleRouteListClick = event => {
        this.props.getHistory(this.props.userId);
        this.props.showPreviousSearches()
    }

    render() {
            if (!this.props.isUserLoggedIn) {
                return <Redirect to='/login' />
            }
        if (this.props.toRoutingListPage) {
            return <Redirect to="/history" />
        }
        else {
            return (
                <div className="search-box-container">
                    <div className="form-group d-flex justify-content-center">
                        <input type="text" name="email" className=" text-center form-control search-box col-10" placeholder="URI" value={this.state.uri} onChange={this.handleUrlChange} />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <input type="submit" className="btn btn-success col-10 search-go-btn" value="GO" onClick={this.searchWebUri} />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <input type="submit" className="btn btn-link" value="View visited sites" onClick={this.handleRouteListClick} />
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        isUserLoggedIn: state.user.isLoggedIn,
        userId: state.user.userId,
        toRoutingListPage: state.search.toRoutingListPage,
        history: state.search.searchedUris
    }
}

function mapDispatchToProps(dispatch) {
    return {
        validLoggedInUser: token => { dispatch(checkForLoggedInUser(token)) },
        searchUri: (uri, userId) => { dispatch(addUriToClient(uri, userId)) },
        getHistory: userId => {dispatch(getRoutesHistory(userId))},
        showPreviousSearches: () => { dispatch(showUrlSearches())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);