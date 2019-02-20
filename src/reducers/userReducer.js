var initialState = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    password: '',
    error: null,
    loading: false,
    toRegisterPage: false
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case "GET_REGISTER_USER":
            return {
                ...state, toRegisterPage: true
            }
        case "LOGIN_BEGIN":
            return {
                ...state, loading: true
            }
        case "LOGIN_SUCCESS":
            sessionStorage.setItem("authToken", action.payload.token);
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload.user._id,
                name: action.payload.user.name,
                email: action.payload.user.email,
                loading: false
            }
        case "LOGIN_FAILURE":
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload.error,
                loading: false
            }
        case "REGISTER_USER_BEGIN":
            return {
                ...state,
                loading: true
            }
        case "REGISTER_USER_SUCCSS":
            return {
                ...state,
                userId: action.payload.user._id,
                name: action.payload.user.name,
                email: action.payload.user.email,
                loading: false
            }
        case "REGISTER_USER_FAILURE":
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload.error,
                loading: false
            }
        case "CHECK_USER_BEGIN":
            return {
                ...state, loading: true
            }
        case "CHECK_USER_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload.user.id,
                name: action.payload.user.name,
                email: action.payload.user.email,
                loading: false
            }
        case "CHECK_UESR_FAILURE":
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload.error,
                loading: false
            }
        default: return state;
    }
}