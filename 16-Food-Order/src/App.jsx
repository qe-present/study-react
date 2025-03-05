import Header from "./component/Header.jsx";
import Meals from "./component/Meals.jsx";
import {CartContextProvider} from "./store/CartContext.jsx";
import {UserProgressContextProvider} from "./store/UserProgressContext.jsx";
import Cart from "./component/Cart.jsx";
import Checkout from "./component/Checkout.jsx";

function App() {
  return (
    <>
        <UserProgressContextProvider>
        <CartContextProvider>
        <Header />
        <Meals></Meals>
            <Cart></Cart>
            <Checkout></Checkout>
        </CartContextProvider>
        </UserProgressContextProvider>
    </>
  );
}

export default App;
