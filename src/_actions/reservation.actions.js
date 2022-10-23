import { reservationService } from '../_services';
import { reservationConstants } from '../_constants';

export const reservationActions = {
    checkAvailability,
    placeReservation,
    collectSelectedService,
    collectTechServices,
    clearReservation,
    clearReservationFromReservationPage,
    clearReservationFromLogout,
    setSearchValue,
    savetechInfos,
    refreshReservationPage
};

function checkAvailability(preferences) {
    return dispatch => {
        dispatch(request( preferences ));
        reservationService.findOpenSlots(preferences)
            .then(
                res => {
                    console.log('RES',res)
                    const slots = []
                    if (Object.keys(res).length > 0) {
                        const keys = Object.keys(res);
                        for (let i = 0; i < keys.length; i++) {
                            slots.push({
                                id: keys[i],
                                days: res[keys[i]]
                            })
                        }
                    }
                    dispatch(success(slots));
                    window.initializeReservationCarousel()
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(preferences) { return { type: reservationConstants.APPOINTMENT_SLOTS_REQUEST, preferences } }
    function success(slots) { return { type: reservationConstants.APPOINTMENT_SLOTS_SUCCESS, slots } }
    function failure(error) { return { type: reservationConstants.APPOINTMENT_SLOTS_FAILURE, error } }
}

function collectSelectedService(selectedServices) {
    console.log(selectedServices)
    return dispatch => {
        dispatch(request())
        dispatch(success(selectedServices))
    };
    function request() { return { type: reservationConstants.SELECTEDSERVICES_REQUEST } }
    function success(selectedServices) { return { type: reservationConstants.PLACE_SELECTEDSERVICES, selectedServices } }
}

function placeReservation(reservations) {
    return dispatch => {
        dispatch(request( reservations ));

        reservationService.placeReservation(reservations)
            .then(
                response => {
                    dispatch(success());
                    dispatch(clearProduct());
                    localStorage.removeItem('cartItems')
                },
                error => {
                    error.then(e => {
                        dispatch(failure(e.message));
                    })

                }
            );
    };

    function request(reservations) { return { type: reservationConstants.PLACE_RESERVATION_REQUEST, reservations } }
    function success() { return { type: reservationConstants.PLACE_RESERVATION_SUCCESS } }
    function failure(error) { return { type: reservationConstants.PLACE_RESERVATION_FAILURE, error } }
    function clearProduct() { return { type: reservationConstants.CLEAR_CART_PRODUCTS } }
}
function collectTechServices(services,id) {
    return dispatch => {
        dispatch(request(id));
        dispatch(success(services))
    };
    function request(service) { return { type: reservationConstants.TECHSERVICES_COLLECTION_REQUEST,service } }
    function success(services) { return { type: reservationConstants.TECHSERVICES_COLLECTION_SUCCESS,services } }
}

function clearReservation() {
    return dispatch => {
        dispatch(success())
    };
    function success() { return { type: reservationConstants.CLEAR_RESERVATION } }
}
function clearReservationFromReservationPage() {
    return dispatch => {
        dispatch(success())
    };
    function success() { return { type: reservationConstants.CLEAR_RESERVATION_FROM_RESERVATION_PAGE } }
}
function clearReservationFromLogout() {
    return dispatch => {
        dispatch(success())
    };
    function success() { return { type: reservationConstants.CLEAR_RESERVATION_FROM_LOGOUT } }
}
function setSearchValue(name) {
    return dispatch => {
        dispatch(success(name))
    };
    function success(name) { return { type: reservationConstants.SET_SEARCH_VALUE,name } }
}

function savetechInfos(techJSON) {

    return dispatch => {
        dispatch(success(techJSON))
    };
    function success(techJSON) { return { type: reservationConstants.SET_TECH_INFO,techJSON } }
}
function refreshReservationPage() {

    return dispatch => {
        dispatch(success())
    };
    function success() { return { type: reservationConstants.REFRESH_PAGE} }
}
