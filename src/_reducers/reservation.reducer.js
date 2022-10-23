import { reservationConstants } from '../_constants';

export function reservation(state = {selectedServices: [],searchValue: '',techJSON: [],cartItems:[]}, action) {

  switch (action.type) {
    case reservationConstants.APPOINTMENT_SLOTS_REQUEST:
      return {
        ...state,
          findingAvailability: true,
        foundAvailability: false
      };
    case reservationConstants.APPOINTMENT_SLOTS_SUCCESS:
      return {
        ...state,
        findingAvailability:false,
        foundAvailability: false,
        slots: action.slots
      };
    case reservationConstants.APPOINTMENT_SLOTS_FAILURE:
      return {
        ...state,
        findingAvailability:false,
        availabilityError:true
      };

    case reservationConstants.PLACE_RESERVATION_REQUEST:
      return {
        ...state,
          placingReservation:true
      };
    case reservationConstants.PLACE_RESERVATION_SUCCESS:
      //localStorage.setItem('selected_services',JSON.stringify([]))
      return {
        ...state,
          reservationPlaced:true,
         placingReservation:false,
        selectedServices: [],
        slots:[],
        techServices:[],
        foundAvailability: true,
        searchValue: '',
        service: ''
      };
    case reservationConstants.PLACE_RESERVATION_FAILURE:
      return {
        ...state,
        reservationPlaced: false,
        reservationError: action.error
      };
    case reservationConstants.CLEAR_RESERVATION:
      return {
        ...state,
        reservationPlaced: false,
        reservationError:'',
        searchValue: ''

      }
    case reservationConstants.CLEAR_RESERVATION_FROM_RESERVATION_PAGE:

      return {
        ...state,
        service: '',
        techServices: [],
        slots: [],
        foundAvailability: true,
        selectedServices: [],
        searchValue: ''

      }
    case reservationConstants.CLEAR_RESERVATION_FROM_LOGOUT:
      //localStorage.setItem('selected_services',JSON.stringify([]))
      return {
        ...state,
        service: '',
        techServices: [],
        slots: [],
        foundAvailability: true,
        selectedServices: [],
        searchValue: ''

      }
    case reservationConstants.SELECTEDSERVICES_REQUEST:
      //localStorage.setItem('selected_services',JSON.stringify([]))
      return {
        ...state,
        selectedServices: []
      };
    case reservationConstants.PLACE_SELECTEDSERVICES:
      if(action.selectedServices.length === 0){
        //localStorage.setItem('selected_services',JSON.stringify(action.selectedServices))
        return {
          ...state,
          selectedServices: [...action.selectedServices],
          foundAvailability: true

        };
      }else {
        //localStorage.setItem('selected_services',JSON.stringify(action.selectedServices))
        return {
          ...state,
          selectedServices: [...action.selectedServices],
        };
      }
    case reservationConstants.TECHSERVICES_COLLECTION_REQUEST:
      return {
        ...state,
        techServices: [],
        service:action.service
      };
    case reservationConstants.TECHSERVICES_COLLECTION_SUCCESS:

      return {
        ...state,
        techServices: action.services,

      };
    case reservationConstants.SET_TECH_INFO:

      return {
        ...state,
        techJSON: action.techJSON,

      };
    case reservationConstants.REFRESH_PAGE:

      return {
        ...state,
        techJSON: [],
        slots:[],
        foundAvailability: true,
        techServices: []

      };
    default:
      return state
  }
}
