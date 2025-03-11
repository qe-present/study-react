import {uiActions} from "../ui-slice";
import {cartActions} from "./cart-slice";
export const fetchCartData=()=>{
    return async (dispatch) => {
        const fetchData = async () => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Fetching...',
                message: 'Fetching cart data'
            }))
            const response = await fetch('https://react-app-77ebf-default-rtdb.firebaseio.com/cart.json')
            if (!response.ok) {
                throw new Error('Fetching cart data failed')
            }
            const data = await response.json()
            return data
        }
        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Fetched cart data successfully'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: error.message
            }))
        }
    }
}
export const sendCartData=(cart)=>{
    return  async (dispatch) => {
        const sendRequest = async () => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data'
            }))
            const response = await fetch('https://react-app-77ebf-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })

            })
            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
        }
        try {
            await sendRequest()
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Sent cart data successfully'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: error.message
            }))
        }
    }
}