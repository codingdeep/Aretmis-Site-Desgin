import { Config } from '../config';

const apiPath = Config().serverUrl;
export const contactService = {
    sendInquiry
};
function sendInquiry(inquiry) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inquiry)
    };
 
    return fetch(apiPath + 'inquiries', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
 
    return response.json();
}