var initialState = {
    searchedUris: [],
    toRoutingListPage: false,
    loading: false,
    error: ''
}

export default function search(state = initialState, action) {
    switch (action.type) {
        case "ADD_URI_BEGIN":
            return state;
        case "ADD_URI_SUCCESS":
            return state;
        case "ADD_URI_FAILURE":
            return state;
        case "SHOW_URL_LIST":
            return { ...state, toRoutingListPage: true };
        case "FETCH_HISTORY_BEGIN":
            return { ...state, loading: true };
        case "FETCH_HISTORY_SUCCESS":
            return { ...state, loading: false, searchedUris: action.payload };;
        case "FETCH_HISTORY_FAILURE":
            return { ...state, loading: false, error: action.payload };
        default: return state;
    }
}