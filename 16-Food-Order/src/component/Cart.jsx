import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import currencyFormatter from "../utils/formatting";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart(){
    const cartCtx = useContext(CartContext)
    const useProgressCtx = useContext(UserProgressContext)
    const cartTotal = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.quantity*item.price
    },0)
    function handleCloseCart(){
        useProgressCtx.hideCart()
    }
    function handleCheckout(){
        useProgressCtx.showCheckout()
    }

    return(
        <Modal className="cart" open={useProgressCtx.progress==='cart'}
               onClose={useProgressCtx.progress==='cart'&&handleCloseCart}>
    <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onIncrease={()=>cartCtx.addItem(item)}
                        onDecrease={()=>cartCtx.removeItem(item.id)}
                    ></CartItem>
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart} textOnly>Close</Button>
                {cartCtx.items.length>0&&(<Button onClick={handleCheckout}>Go to Checkout</Button>)}
            </p>
    </Modal>
    )
}