import AddCartButton from "../AddCartButton/AddCartButton";
import style from './DisplaySearchResult.module.css';
import SingleProduct from "../SingleProduct/SingleProduct";

function DisplaySearchResult({data}){
    return(
        <>
            {data.length > 0 && (
                data.map((product) => (
                    <div key={product.productID} className={style.productContainer}>
                        <div className={style.infoContainer}>
                            <div>
                                <img src={product.image} alt={product.description} className={style.searchImage}/>
                            </div>
                            <div className={style.titleContainer}>
                                <h3>{product.name}</h3>
                                <SingleProduct product={product}/>
                            </div>
                        </div>
                        <div>
                            <p>{product.price} $</p>
                            <AddCartButton product={product}/>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}

export default DisplaySearchResult;