import {productsConstants} from "../_constants";
import {productService} from "../_services";


export const productsAction = {
    getRecommendedProducts,
    addToCart,
    clearCartFromLogout
}

function getRecommendedProducts(id){
    return dispatch=>{
        dispatch(request({ }));
        productService.getRecommendedProducts(id).then(products=>{
            if(products){
                dispatch(success(products['newArrivals']))
            }
        }).catch(error => {
            dispatch(errors(error))
        })
    }

    function request() { return { type: productsConstants.RECOMMENDED_PRODUCTS_REQUEST } }
    function success(products) {return {type: productsConstants.RECOMMENDED_PRODUCTS_SUCCESS, products} }
    function errors(error) { return {type: productsConstants.RECOMMENDED_PRODUCTS_FAILURE, error} }
}

function addToCart(cartItems){
    return dispatch=>{
          dispatch(success(cartItems))
    }

    function success(cartItems) {return {type: productsConstants.ADD_TO_CART_SUCCESS, cartItems} }
}

function clearCartFromLogout(){
    return dispatch=>{
          dispatch(success())
    }

    function success() {return {type: productsConstants.CLEAR_CART_PRODUCTS} }
}
