import {useContext} from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import currencyFormatter from "../utils/formatting";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import userProgressContext from "../store/UserProgressContext.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
const requestConfig={
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    }
}
export default function Checkout(){

    const cartCtx = useContext(CartContext)
    const userProgreeCtx = useContext(userProgressContext)
    const cartTotal = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.quantity*item.price
    },0)
    const {
        data,
        isLoading:isSending,
        error,
        sendRequest,
        clearData,
    }=useHttp('http://localhost:3000/orders',requestConfig)

    function handleClose(){
        userProgreeCtx.hideCheckout()
    }
    function handleFinish(){
        userProgreeCtx.hideCheckout()
        cartCtx.clearCart()
        clearData()
    }

    function handleSubmit(event){
        event.preventDefault()
        const fd=new FormData(event.target)
        const orderData=Object.fromEntries(
            fd.entries()
        )
        sendRequest(
            JSON.stringify({
                order:{
                    items:cartCtx.items,
                    customer:orderData
                }
            })
        )
    }
    let actions=(
        <>
            <Button textOnly type="button" onClick={handleClose}>Close</Button>
            <Button>Submit Order</Button>
        </>
    )
    if(isSending){
        actions=<span>Sending order data...</span>
    }
    if(data && !error){
        return (
            <Modal  open={userProgreeCtx.progress==='checkout'} onClose={handleClose}>
                <h2>Success</h2>
                <p>your order was successfully sent.</p>
                <p>we will get back to your with more details via email within the next few minutes</p>
                <p className="modeal-actions">
                    <Button onClick={handleFinish}>Okay</Button>
                </p>
            </Modal>
        )
    }
    return (
        <Modal open={userProgreeCtx.progress==='checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label="Full Name" type="text" id="name" ></Input>
                <Input label="Email" type="email" id="email"></Input>
                <Input label="Street" type="text" id="street"></Input>
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code"></Input>
                    <Input label="City" type="text" id="city"></Input>
                </div>
                {error&& <Error title='Failed to submit order' message={error} ></Error>}
                <p className="modal-actions">
                    {actions}
                </p>
            </form>
        </Modal>
    )
}