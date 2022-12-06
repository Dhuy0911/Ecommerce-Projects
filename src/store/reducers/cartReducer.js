import { cartActionTypes } from "../actionsType/cartActionTypes";

const initState = {
    cart: [],
    _product: [],
    numberCart: 0




}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case cartActionTypes.GET_ALL_PRODUCT: {
            return {
                ...state,
                _product: action.payload
            }
        }
        case cartActionTypes.GET_NUMBER_CART: {
            return {
                ...state
            }
        }
        case cartActionTypes.ADD_CART: {
            if (state.numberCart == 0) {
                const newCart = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.image,
                }
                state.cart.push(newCart);
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        }
        case cartActionTypes.INCREASE_QUANTITY: {
            state.numberCart++
            state.cart[action.payload].quantity++;
            return {
                ...state
            }
        }
        case cartActionTypes.DECREASE_QUANTITY: {
            let quantity = state.cart[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.cart[action.payload].quantity--;

            }
            return {
                ...state
            }
        }
        case cartActionTypes.DELETE_CART: {
            let quantity = state.cart[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity,
                cart: state.cart.filter(item => {
                    return item.id != state.cart[action.payload].id
                })
            }
        }
        default: {
            return {
                ...state
            }
        }

    }
}
export default cartReducer;