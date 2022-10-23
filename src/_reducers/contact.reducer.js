import { contactConstants } from '../_constants';
 
export function sendInquiry(state = {}, action) {
  switch (action.type) {
    case contactConstants.INQUIRY_REQUEST:
      return { sendingInquiry: true };
    case contactConstants.INQUIRY_SUCCESS:
      return {
        inquirySent: true
      };
    case contactConstants.INQUIRY_FAILURE:
      return {};
    default:
      return state
  }
}