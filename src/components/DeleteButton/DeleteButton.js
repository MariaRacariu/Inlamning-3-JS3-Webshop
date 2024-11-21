import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import style from './DeleteButton.module.css';

function DeleteButton({product}){
    const {cartList, setCartList} = useContext(CartContext);

    const clickItem = () =>{
        const productQuantity = product.quantity > 1;

        if(productQuantity){
            setCartList(prevCartList => prevCartList.map(item => item.productID === product.productID ? {...item, quantity: item.quantity - 1} : item));
        }else{
            setCartList(cartList.filter(item => item.productID !== product.productID));
        }
    }
    
    return(
        <>
            <button onClick={clickItem} className={style.deleteButton}><i class="fa-solid fa-trash fa-2x"></i></button>
        </>
    );
}

export default DeleteButton;