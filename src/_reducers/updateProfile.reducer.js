import { userConstants } from '../_constants';
 
export function updateProfile(state = {}, action) {
  switch (action.type) {
    case userConstants.UPDATE_PROFILE_REQUEST:
      return { updatingProfile: true };
    case userConstants.UPDATE_PROFILE_SUCCESS:
      return {
        profileUpdated: true,
        updatingProfile: false,
        updatedUser:action.user
      };
    case userConstants.UPDATE_PROFILE_FAILURE:
      return {
        profileUpdated: false,
        updatingProfile: false,
        updateProfileError: action.error
      };
    case userConstants.UPDATE_PASSWORD_SUCCESS:
      return {
          passwordUpdated: true,
          updatingPassword:false
      }
    case userConstants.RESET_PASSWORD_SUCCESS:
      return {
        passwordReset:true,
        resettingPassword: false
      }
    case userConstants.UPDATE_PASSWORD_REQUEST:
      return {
        updatingPassword:true
      }
    case userConstants.RESET_PASSWORD_REQUEST:
      return {
        resettingPassword: true
      }
    default:
      return state
  }
}