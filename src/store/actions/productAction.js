import { notification } from "antd"
import { CONFIG } from "../../service/utils"
import { productActionTypes } from "../actionsType/productActionType"

export const fetchProductAction = (limit, page) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: productActionTypes.FETCH_PRODUCT_START
            })
            const bodyStream = await fetch(`${CONFIG.API_URL}/products`, {
                param: {
                    limit, page
                }
            });

            const data = await bodyStream.json();

            dispatch({
                type: productActionTypes.FETCH_PRODUCT_SUCCESS,
                payload: data
            })

        } catch (e) {
            dispatch({
                type: productActionTypes.FETCH_PRODUCT_ERROR
            })
        }
    }
}