import { useSnackbar } from 'notistack';
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});


export function CartContextProvider({children}){
    const ls = typeof window !== "undefined" ? localStorage : null;
    const [cartProducts, setCartProducts] = useState([]);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        if(cartProducts?.length > 0){
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts]);

    useEffect(() => {
        if(ls && ls.getItem('cart')){
            setCartProducts(JSON.parse(ls.getItem('cart')));
        }
    }, []);


    function addProduct(productId){
        setCartProducts(prev => [...prev, productId]);
        enqueueSnackbar("Added to cart!", {variant : "success", autoHideDuration: 2000});
    }

    function removeProduct(productId){
        setCartProducts(prev => {
            const pos = prev.indexOf(productId);
            if(pos !== -1){
                return prev.filter((val, ind) => ind !== pos);
            }else return prev;
        });
        
    }

    function clearCart(){
        setCartProducts([]);
    }
    return(
        <CartContext.Provider value = {{cartProducts, setCartProducts, addProduct, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}