 /* eslint-disable */
import { cartConstants } from '../_constants';
import { history } from '../_helpers/history';

export const cartActions = {
    updateCart,
    initializeCart,
    clearCart,
    saveShippingAddress
};

function updateCart(product,variantId,type,quantity) {
    console.log(quantity)
    return dispatch => {
        var cart = localStorage.getItem('cart')
        if(cart != null){
            cart = JSON.parse(cart)
        }
        else{
            cart = {}
            cart.subtotal = 0
            cart.products = []
        }
        if(type == cartConstants.ADD_PRODUCT && cart.products.length > 0 && cart.products.findIndex(p => p.id == product.id) != -1){
            type = cartConstants.UPDATE_QUANTITY
        }
        var raiseQuantityError = false
        switch(type){
            case cartConstants.ADD_PRODUCT:
                product.variant = product.variants.find(v => v.id == variantId);
                product.quantity = quantity;
                cart.products.push(product)
                break;

            case cartConstants.DELETE_PRODUCT:
                var index = cart.products.findIndex(p => p.id == product.id)
                cart.products.splice(index,1)
                break;

            case cartConstants.UPDATE_QUANTITY:
                var index = cart.products.findIndex(p => p.id == product.id);
                console.log(index)
                if(quantity <= cart.products[index].variant.quantity){
                    cart.products[index]["quantity"] = quantity
                }else{
                    raiseQuantityError = true
                }
                break;

            default:
                break;

        }
        if(raiseQuantityError == false){
            var total = 0
            cart.products.forEach(p => {
                total += p.quantity * p.variant.salePrice
            });
            cart.subtotal = total;
            localStorage.setItem("cart",JSON.stringify(cart))
            dispatch(updateCart(cart))
        }
        else{
            dispatch(failure(cart))
        }
    };

    function updateCart(cart) { return { type: cartConstants.UPDATE_CART, cart } }
    function failure(cart) { return { type: cartConstants.UPDATE_QUANTITY_ERROR, cart } }
}

function clearCart(){
    return dispatch => {
        localStorage.removeItem('cart')
        dispatch(initializeCart())
    }
}

function saveShippingAddress(address){
    return dispatch => {
        var cart = localStorage.getItem('cart')
        cart = JSON.parse(cart)
        cart.shippingAddress = address
        localStorage.setItem("cart",JSON.stringify(cart))
        dispatch(updateCart(cart))
        history.push('/checkout/payment');
    }
    function updateCart(cart) { return { type: cartConstants.UPDATE_CART, cart } }
}

function initializeCart(){
    //localStorage.removeItem('cart')
    return dispatch => {
        var cart = localStorage.getItem('cart')
        if(cart != null){
            cart = JSON.parse(cart)
        }
        else{
            cart = {}
            cart.subtotal = 0
            cart.products = []
        }
        localStorage.setItem("cart",JSON.stringify(cart))
        dispatch(updateCart(cart))
    }
    function updateCart(cart) { return { type: cartConstants.UPDATE_CART, cart } }
}
