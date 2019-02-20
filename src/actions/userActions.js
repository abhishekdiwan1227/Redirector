import Axios from 'axios';

export function mapUser(user) {
    return {
        type: "MAP_USER",
        payload: user
    };
};

export function getUserPage() {
    return {
        type: "GET_REGISTER_USER"
    }
}

export function tryLogin(user) {
    return dispatch => {
        dispatch(loginBegin())
        return Axios.post("http://localhost:8080/api/user/login", user)
            .then(json => {
                dispatch(loginSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(loginFailure(error)));
    }
}

export function loginBegin() {
    return {
        type: "LOGIN_BEGIN",
    }
}

export function loginSuccess(userResult) {
    return {
        type: "LOGIN_SUCCESS",
        payload: userResult
    }
}

export function loginFailure(error) {
    return {
        type: "LOGIN_FAILURE",
        payload: error
    }
}

export function registerUser(user) {
    return dispatch => {
        dispatch(registerUserBegin())
        return Axios.post("http://localhost:8080/api/user/register", user)
            .then(json => {
                dispatch(registerUserSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(registerUserFailure(error)));
    }
}

export function registerUserBegin() {
    return {
        type: "REGISTER_USER_BEGIN"
    }
}

export function registerUserSuccess(user) {
    return {
        type: "REGISTER_USER_SUCCESS",
        payload: user
    }
}

export function registerUserFailure(error) {
    return {
        type: "REGISTER_USER_FAILURE",
        payload: error
    }
}

export function checkForLoggedInUser(token) {
    return dispatch => {
        dispatch(checkUserBegin())
        return Axios.get("http://localhost:8080/api/user/validate/" + token)
            .then(json => {
                dispatch(checkUserSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(checkUserFailure(error)));
    }
}

export function checkUserBegin() {
    return {
        type: "CHECK_USER_BEGIN"
    }
}

export function checkUserSuccess(user) {
    return {
        type: "CHECK_USER_SUCCESS",
        payload: user
    }
}

export function checkUserFailure(error) {
    return {
        type: "CHECK_USER_FAILURE",
        payload: error
    }
}