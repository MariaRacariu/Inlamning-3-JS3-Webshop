import Search from "./components/Search/Search";
import Cart from "./components/Cart/Cart";
import "./App.css";

import { CartContext } from "./Contexts/CartContext";
import { useState } from "react";

function App(){

  const [cartList, setCartList] = useState([]);

  return(
      <>
      <CartContext.Provider value={{cartList, setCartList}}>
        <Search/>
        <Cart/>
      </CartContext.Provider>
      </>
  )
}

export default App;