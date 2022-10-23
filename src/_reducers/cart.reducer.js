import { cartConstants } from '../_constants';
 
export function cart(state = {}, action) {
  switch (action.type) {
    case cartConstants.UPDATE_CART:
      return {
        cart:action.cart,
        updateQuantityError:false
      };
    case cartConstants.UPDATE_QUANTITY_ERROR:
      return {
        updateQuantityError:true,
        cart: action.cart
      }
    default:
      return state
  }
}