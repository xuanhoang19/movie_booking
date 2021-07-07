import * as actionType from '../constants/actionType';

export const actFetchUsersLoginRequest = () => {
    return (dispatch) => {
        var user = localStorage.getItem("user");
        user = user ? JSON.parse(user) : null;

        dispatch(actFetchUserLogin(user));
    }
}

export const actFetchUserLogin = (user) => {
    return {
        type: actionType.FETCH_USER_LOGIN,
        user
    }
}

export const actUpdateStateUserLoginRequest = () => {
    return (dispatch) => {
        var user = localStorage.getItem("user");
        user = user ? JSON.parse(user) : null;

        dispatch(actUpdateStateUserLogin(user));
    }
}

export const actUpdateStateUserLogin = (user) => {
    return {
        type: actionType.UPDATE_STATE_USER_LOGIN,
        user
    }
}
