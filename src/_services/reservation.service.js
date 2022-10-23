/* eslint-disable */
import { Config } from '../config';
import { authHeader } from '../_helpers';
import { history } from '../_helpers/history';

const apiPath = Config().serverUrl;
export const reservationService = {
    findOpenSlots,
    placeReservation,
    getOpenAppointments,
    getPastAppointments,
    cancelAppointment,
    getAllServices,
    getSpecificVisits,
    getSpecificService,
};

function findOpenSlots(userPreferences) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        credentials:'include',
        body:JSON.stringify(userPreferences)
    };

    return fetch(apiPath+'visits/suggest/calendar', requestOptions).then(handleResponse);
}

function placeReservation(reservationJson){
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        credentials:'include',
        body:JSON.stringify(reservationJson)
    };

    return fetch(apiPath+'visits', requestOptions).then(handleResponse);

}

function getOpenAppointments(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials:'include',
    };

    return fetch(apiPath+'visits?locId=101&type=user-open', requestOptions).then(handleResponse);

}

function getPastAppointments(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials:'include',
    };

    return fetch(apiPath+'visits?locId=101&type=user-past', requestOptions).then(handleResponse);

}

function cancelAppointment(visitId,reason){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
        credentials:'include',
        body:JSON.stringify({"cancellationReason":reason})
    };

    return fetch(apiPath+'visits/' + visitId, requestOptions).then(handleResponse);

}


function getAllServices(offset,ctgryId,searchVal){
    //console.log(offset, ctgryId, searchVal);
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include',
    };
    var queryParams="locId=" + JSON.parse(localStorage.getItem('app')).locations[0].id + "&page=" + offset + "&pageCount=" + 10;
    //alert(queryParams);
    if(ctgryId !=undefined && ctgryId !=''){
        queryParams += "&ctgryId=" + ctgryId
    }

    if(searchVal != undefined && searchVal != ''){
        queryParams += "&searchVal=" + searchVal
    }
    return fetch(apiPath+'location-services?'+queryParams, requestOptions).then(handleResponse);

}

function getSpecificService(id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include',
    };

    return fetch(apiPath+'location-services/'+id, requestOptions).then(handleResponse);

}
function getSpecificVisits(id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include',
    };

    return fetch(apiPath+'visits/'+id, requestOptions).then(handleResponse);

}



function handleResponse(response) {
    if (!response.ok) {
        if(response.status == 401 || response.status == 403){
            history.push('/login')
        }
        return Promise.reject(response.json());
    }

    return response.json();
}
