import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import DeleteButton from "../DeleteButton/DeleteButton";
import style from './Cart.module.css';

function Cart(){
    const {cartList} = useContext(CartContext);

    const totalQuantity =  cartList.map(item => item.quantity * item.price);
    const total = totalQuantity.reduce((total, currentNumber) => total + currentNumber, 0).toFixed(2);

    return(
        <div className="cartContainer">
            <h2 className={style.cartTitle}>Cart</h2>
                {cartList.length > 0 ? (
                    cartList.map((product) => (
                    <div key={product.productID} className={style.productContainer}>
                        <div className={style.productInformation}>
                            <div>
                                <img src={product.image} alt={product.description} className={style.searchImage}/> 
                            </div>
                            <div className={style.titleContainer}>
                                <h3>{product.name}</h3>
                                <p>Amount: {product.quantity}</p>
                                <p>Total: {product.quantity * product.price} $</p>
                            </div>
                        </div>
                        <div>
                            <DeleteButton product={product}/>
                        </div>
                    </div>
                    ))
                    ) : (
                    <p>The cart is very empty</p>
                )}
            <div className={style.totalContainer}>
                <h2>Total: {total} $</h2>
            </div>
        </div>
    );
}

export default Cart;