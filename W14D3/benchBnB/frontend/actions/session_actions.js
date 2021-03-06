import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';


export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
    
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = (formUser) => (dispatch) => {
    return APIUtil.login(formUser).then(user => dispatch(receiveCurrentUser(user)))
}

export const createNewUser = (formUser) => (dispatch) => {
    return APIUtil.signup(formUser).then(user => dispatch(receiveCurrentUser(user)))
}

export const logout = () => (dispatch) => {
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser()))
}

window.login = login;
window.logout = logout;
window.createNewUser = createNewUser;