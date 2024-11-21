import { useState } from "react";
import style from './SingleProduct.module.css';

function SingleProduct ({product}) {
    const [information, setInfoStatus] = useState(false);

    const showInfo = () =>{
        setInfoStatus(true);
    }

    const closeButton = () =>{
        setInfoStatus(false);
    }

    return (
    <>
         <button onClick={showInfo} className={style.moreInfoButton}>More information</button>

         {information === true && (
            <div className={style.moreInfoContainer}>
                <div className={style.moreInfoContent}>
                    <button className={style.closeButton} onClick={closeButton}><i class="fa-solid fa-xmark fa-2x"></i></button>
                    <div>
                        <img src={product.image} alt={product.description}/>
                    </div>
                    <div className={style.infoContainer}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.price} $</p>
                    </div>
                    
                    
                </div>
            </div>
         )}
    </>
    );
}

export default SingleProduct;