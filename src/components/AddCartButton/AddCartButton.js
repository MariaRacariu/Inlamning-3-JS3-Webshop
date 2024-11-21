import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import style from './AddCartButton.module.css';

function AddCartButton({product}){

    const {cartList, setCartList} = useContext(CartContext);

    const clickItem = () =>{

        const existingProduct = cartList.find(item => item.productID === product.productID);

        // Check if product already exists in cart, if yes add quantity + 1 if no add the item with new property quantity
        if(existingProduct){
            setCartList(prevCartList => prevCartList.map(item => item.productID === product.productID ? {...item, quantity: item.quantity + 1} : item));
        }else{
            setCartList([...cartList, { ...product, quantity: 1 }]);
        }
    }
    
    return(
        <>
            <button onClick={clickItem} className={style.addToCartButton}><i className="fa-solid fa-cart-shopping fa-2x"></i></button>
        </>
    );
}

export default AddCartButton;