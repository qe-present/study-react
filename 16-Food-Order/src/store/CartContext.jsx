import {createContext, useReducer} from "react";
const CartContext=createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{},
    clearCart:()=>{}
})
function  cartReducer(state,action){
    if(action.type==='ADD_ITEM'){
        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id)
        const updateItems=[...state.items]
        if(existingCartItemIndex>-1){
            const existingItem=state.items[existingCartItemIndex]
            const updateItem={
                ...existingItem,
                quantity:existingItem.quantity+1
            }
            updateItems[existingCartItemIndex]=updateItem

        }else {
            updateItems.push(
                {
                    ...action.item,
                    quantity:1
                }
            )
        }
        return {
            ...state,
            items:updateItems
        }
    }
    if(action.type==='REMOVE_ITEM'){
        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.id)
        const existingItem=state.items[existingCartItemIndex]
        const updateItems=[...state.items]
        if(existingItem.quantity===1){
            updateItems.splice(existingCartItemIndex,1)
        }else {
            const updateItem={
                ...existingItem,
                quantity:existingItem.quantity-1
            }
            updateItems[existingCartItemIndex]=updateItem
        }
        return {
            ...state,
            items:updateItems
        }
    }
    if(action.type==='CLEAT_CART'){
        return {
            ...state,
            items:[]
        }
    }
    return state
}

export function CartContextProvider({children}){
    const [cart,dispatchCartAction ] = useReducer(cartReducer,{
        items:[]
    })

    function addItem(item){
        dispatchCartAction({type:'ADD_ITEM',item:item})
    }
    function removeItem(id){
        dispatchCartAction({type:'REMOVE_ITEM',id:id})
    }
    function clearCart(){
        dispatchCartAction({type:'CLEAT_CART'})
    }
    const cartContext={
        items:cart.items,
        addItem:addItem,
        removeItem:removeItem,
        clearCart:clearCart
    }
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
export default CartContext