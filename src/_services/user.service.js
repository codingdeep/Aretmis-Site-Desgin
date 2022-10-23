import { authHeader } from '../_helpers';
import { Config } from '../config';

import { history } from '../_helpers/history';

const apiPath = Config().serverUrl;
export const userService = {
    login,
    logout,
    register,
    updateProfile,
    updateProfilePic,
    updatePassword,
    resetPassword,
    getUserInfo
};
 
function login(username, password) {
    //generating auth hash for sending login request
    const app = JSON.parse(localStorage.getItem('app'));
    const businessId = app.id;
    const hash = new Buffer(`${businessId}_${username}:${password}`).toString('base64')
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','Authorization':`Basic ${hash}`,'X-Requested-With': 'XMLHttpRequest' },
        credentials:'include',
        crossDomain: true,
    };
 
    return fetch(apiPath+'users/token', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(auth => {
            if (auth && auth.sessionId) {
                const getUserRequestOptions = {
                    method: 'GET',
                    headers: { 'X-Auth-Token': auth.sessionId, 'X-Xsrf-Token':auth.csrf.token, 'Content-Type': 'application/json' },
                    credentials: 'include'
                };
                
                return fetch(apiPath + 'users/0',getUserRequestOptions).then(response => {
                    if(!response.ok){
                        return Promise.reject(response.statusText);
                    }
                    return response.json();
                }).then(user => {
                    
                    user.csrfToken = auth.csrf.token;
                    user.token = auth.sessionId;
                    user.loggedIn = true;
                    localStorage.setItem('user', JSON.stringify(user));
                    return user;
                });
            }
            else{
                return auth;
            }
           
        });
}
 
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
 
function getUserInfo(){
    const getUserRequestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include'
    };
    return fetch(apiPath + 'users/0',getUserRequestOptions).then(response => {
        if(!response.ok){
            if(response.status === 401 || response.status === 403)
                history.push('/login')
            
            return Promise.reject(response.statusText);
        }
        return response.json();
    }).then(user => {
        // store user details and token in local storage to keep user logged in between page refreshes
        if(user){
            let oldUser = JSON.parse(localStorage.getItem('user'))
            user.token = oldUser.token;
            user.csrfToken = oldUser.csrfToken;
            user.loggedIn = true;
            localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
    })
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
 
    return fetch(apiPath + 'users', requestOptions).then(response => {
        if (!response.ok) {
            throw response
        }
        return response.json();
    });
}
 
function updateProfile(user) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        credentials:'include',
        body: JSON.stringify(user)
    };
 
    return fetch(apiPath + 'users/0', requestOptions).then(handleResponse);
}

function updateProfilePic(file){
    let data = new FormData()
    data.append('img', file);
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        credentials:'include',
        crossDomain: true,
        mimeType: "multipart/form-data",
        processData: false,
        contentType: false,
        body: data
    };
    delete requestOptions.headers["Content-Type"];
    return fetch(apiPath + 'users/0/picture', requestOptions).then(handleResponse);
}

function updatePassword(password) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        credentials:'include',
        body: JSON.stringify(password)
    };
 
    return fetch(apiPath + 'users/0/password', requestOptions).then({});
}


function resetPassword(resetEmail) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(resetEmail)
    };
 
    return fetch(apiPath + 'users/me/password', requestOptions).then({});
}
 
function handleResponse(response) {
    if (!response.ok) {
        if(response.status === 401 || response.status === 403){
            history.push('/login')
        }
        return Promise.reject(response.status);
    }
    return response.json();
}
