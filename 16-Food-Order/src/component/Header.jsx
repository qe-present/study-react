import logo from '../assets/logo.jpg';
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import userProgressContext from "../store/UserProgressContext.jsx";
export default function Header() {
    const cartCtx = useContext(CartContext)
    const useProgressCtx = useContext(userProgressContext)
    const totalCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.quantity
    },0)
    function handleShowCart(){
        useProgressCtx.showCart()
    }
    return (
    <header id="main-header">
      <div id="title">
          <img src={logo} alt='A restaurant'/>
          <h1>ReactFood</h1>
      </div>
        <nav>
            <Button textOnly
                    onClick={handleShowCart}
            >Cart({totalCartItems})</Button>
        </nav>
    </header>
  );
}