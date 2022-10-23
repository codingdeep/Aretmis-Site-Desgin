import { contactConstants } from '../_constants';
import { contactService } from '../_services';
import { alertActions } from './alert.actions';
 
export const contactActions = {
    sendInquiry
};

function sendInquiry(inquiry) {
    return dispatch => {
        inquiry.location = {id:JSON.parse(localStorage.getItem('app')).locations[0].id}
        dispatch(request(inquiry));
 
        contactService.sendInquiry(inquiry)
            .then(
                inquiry => {
                    dispatch(success(inquiry));
                    
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
 
    function request(inquiry) { return { type: contactConstants.INQUIRY_REQUEST, inquiry } }
    function success(inquiry) { return { type: contactConstants.INQUIRY_SUCCESS, inquiry } }
    function failure(error) { return { type: contactConstants.INQUIRY_FAILURE, error } }
}