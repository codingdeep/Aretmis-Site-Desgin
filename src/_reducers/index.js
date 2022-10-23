import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { reservation } from './reservation.reducer';
import { updateProfile } from './updateProfile.reducer'
import { sendInquiry } from './contact.reducer';
import { alert } from './alert.reducer';
import { cart } from './cart.reducer'
import {products} from "./products.reducers";

const rootReducer = combineReducers({
  authentication,
  registration,
  reservation,
  updateProfile,
  sendInquiry,
  alert,
  cart,
  products
});

export default rootReducer;
