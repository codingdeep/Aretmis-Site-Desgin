import {productsConstants, reservationConstants} from "../_constants";

const initialState = {recommendedProducts:[],cartItems:[]};

export const products = (state=initialState,action)=>{

    switch (action.type) {
        case productsConstants.RECOMMENDED_PRODUCTS_REQUEST:
            return {
                ...state,
                beforeLoading: true,
                errors: '',
                recommendedProducts: []
            }
        case productsConstants.RECOMMENDED_PRODUCTS_SUCCESS:

            return {
                ...state,
                beforeLoading: false,
                errors: '',
                recommendedProducts: action.products
            }
        case productsConstants.RECOMMENDED_PRODUCTS_FAILURE:
            return {
                ...state,
                beforeLoading: false,
                errors: action.error,
                recommendedProducts: []
            }
        case productsConstants.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.cartItems
            }

        case reservationConstants.CLEAR_CART_PRODUCTS:

            return {
                ...state,
                cartItems: []
            }

        default:
            return state
    }
}
