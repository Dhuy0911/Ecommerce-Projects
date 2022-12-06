import axios from "axios"
import { useEffect } from "react";
import { CONFIG } from "../../service/utils"
import { cartActionTypes } from "../actionsType/cartActionTypes";


export const addToCartFetchProduct = () => {
    return async (dispatch) => {
        try {
            const cartData = await axios.get(`${CONFIG.API_URL}/products`);

            const data = cartData.data
            dispatch({
                type: cartActionTypes.GET_ALL_PRODUCT,
                _product: data
            })
        } catch (e) {
            console.log(e)
        }
    }
}
