import Axios from 'axios';

export function addUriToClient(uri, userId) {
    var navigatedUrl = {
        url: uri
    };
    return dispatch => {
        dispatch(addUriBegin())
        return Axios.put("http://localhost:8080/api/search/user/" + userId, navigatedUrl)
            .then(json => {
                dispatch(addUriSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(addUriFailure(error)));
    }
}

export function addUriBegin() {
    return {
        type: "ADD_URI_BEGIN"
    }
}

export function addUriSuccess(uri) {
    return {
        type: "ADD_URI_SUCCESS",
        payload: uri
    }
}

export function addUriFailure(error) {
    return {
        type: "ADD_URI_FAILURE",
        payload: error
    }
}

export function showUrlSearches() {
    return {
        type: "SHOW_URL_LIST"
    }
}

export function getRoutesHistory(userId) {
    debugger;
    return dispatch => {
        dispatch(fetchHistoryBegin())
        return Axios.get("http://localhost:8080/api/search/history/" + userId)
            .then(json => {
                dispatch(fetchHistorySuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(fetchHistoryFailure(error)));
    }
}

export function fetchHistoryBegin() {
    return {
        type: "FETCH_HISTORY_BEGIN"
    }
}

export function fetchHistorySuccess(history) {
    return {
        type: "FETCH_HISTORY_SUCCESS",
        payload: history
    }
}

export function fetchHistoryFailure(error) {
    return {
        type: "FETCH_HISTORY_FAILURE",
        payload: error
    }
}