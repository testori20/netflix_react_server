
// Action을 받아서, 그를 통해 context 상태를 업데이트

const AuthReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            }
        case "LOGOUT_START":
            return {
                user: null,
                isFetching: false,
                error: false,
            }
        default:
            return {...state}
    }
};

export default AuthReducer;