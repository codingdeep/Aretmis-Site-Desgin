import { Config } from '../config';


const apiPath = Config().serverUrl;
export const appService = {
    getAppDetails,
    getAllServices
};




function getAppDetails() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(apiPath+'businesses/123456789', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(app => {
            localStorage.setItem('app',JSON.stringify(app));
            return app;
        });
}

function getAllServices() {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(apiPath+'location-services?locId=101&page=0', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(services => {
            return services
        });
}
