 /* eslint-disable */

import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './alert.actions';
import { history } from '../_helpers/history';
import ReactGA from 'react-ga';

export const userActions = {
    login,
    logout,
    register,
    updateProfile,
    updateProfilePic,
    updatePassword,
    resetPassword,
    getUserInfo
};

function login(username, password, redirectReservation, route) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    ReactGA.set({ userId: user.id });
                    if(user.passwordResetRequired == true)
                       history.push('/update-password');
                    else if(redirectReservation == true)
                        history.push(route);
                    return true;
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                    return false;
                }
            ).catch (err => {
                return false
            });
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getUserInfo(){
    return dispatch => {
        dispatch(request({ }));

        userService.getUserInfo()
            .then(
                user => {
                    dispatch(success(user));
                    return user;
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: userConstants.GET_USER_INFO_REQUEST } }
    function success(user) { return { type: userConstants.GET_USER_INFO_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GET_USER_INFO_FAILURE, error } }

}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                createdUser => {
                    dispatch(success(createdUser));
                    dispatch(login(user.emailAddress,user.password,true,"/reservation"));
                },
                error => {

                    console.log(error)
                    error.text().then( errorMessage => {
                       let errMsg = JSON.parse(errorMessage).message
                         dispatch(failure(errMsg));
                         dispatch(alertActions.error(errMsg));
                    })

                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function updateProfile(user) {
    return dispatch => {
        dispatch(request(user));

        userService.updateProfile(user)
            .then(
                updatedUser => {
                    let oldUser = JSON.parse(localStorage.getItem('user'))
                    updatedUser.token = oldUser.token;
                    updatedUser.csrfToken = oldUser.csrfToken;
                    updatedUser.loggedIn = true;
                    localStorage.setItem('user',JSON.stringify(updatedUser));
                    dispatch(success(updatedUser));
                    dispatch(updateProfileSuccess(updatedUser));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.UPDATE_PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function updateProfileSuccess(user) { return { type: userConstants.UPDATE_PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_PROFILE_FAILURE, error } }
}

function updateProfilePic(file){
    return dispatch => {
        dispatch(request(file));
        userService.updateProfilePic(file)
            .then(
                updatedUser => {
                    let oldUser = JSON.parse(localStorage.getItem('user'))
                    updatedUser.token = oldUser.token;
                    updatedUser.csrfToken = oldUser.csrfToken;
                    updatedUser.loggedIn = true;
                    localStorage.setItem('user',JSON.stringify(updatedUser));
                    dispatch(success(updatedUser));
                    dispatch(updateProfileSuccess(updatedUser));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };


    function request(user) { return { type: userConstants.UPDATE_PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function updateProfileSuccess(user) { return { type: userConstants.UPDATE_PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_PROFILE_FAILURE, error } }
}

function updatePassword(newPassword){
    return dispatch => {
        dispatch(request());
        userService.updatePassword(newPassword)
            .then(
                updatedUser => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: userConstants.UPDATE_PASSWORD_REQUEST } }
    function success() { return { type: userConstants.UPDATE_PASSWORD_SUCCESS } }
    function failure(error) { return { type: userConstants.UPDATE_PASSWORD_FAILURE, error } }
}

function resetPassword(email){
    return dispatch => {
        dispatch(request(email));
        userService.resetPassword(email)
            .then(
                response => {
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: userConstants.RESET_PASSWORD_REQUEST } }
    function success(response) { return { type: userConstants.RESET_PASSWORD_SUCCESS,response } }
    function failure(error) { return { type: userConstants.RESET_PASSWORD_FAILURE, error } }
}
