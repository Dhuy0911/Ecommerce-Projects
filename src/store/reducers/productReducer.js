import { productActionTypes } from "../actionsType/productActionType"

const initState = {
    product: [],
    isError: false,
    isLoading: true
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case productActionTypes.FETCH_PRODUCT_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case productActionTypes.FETCH_PRODUCT_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case productActionTypes.FETCH_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: action.payload
            }
        }
        default: {
            return state
        }
    }
}
export default productReducer;
