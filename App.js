import React, { useState } from "react";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SearchBar from "./components/SearchBar";

import "./styles.css";

function App() {
    const [cart, setCart] = useState([]);
    const [checkout, setCheckout] = useState(false);
    const [purchaseOptions, setPurchaseOptions] = useState({});
    const [searchQuery, setSearchQuery] = useState("");



    return (
        <div className="app">
            <h1><b><i><center>COMIC GALAXY</center></i></b></h1>
            {!checkout ? (
                <>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    
                    <Catalog cart={cart} setCart={setCart} searchQuery={searchQuery} />
                    <Cart cart={cart} setCheckout={setCheckout} setPurchaseOptions={setPurchaseOptions} />
                    

                </>
            ) : (
                <Checkout cart={cart} purchaseOptions={purchaseOptions} />
            )}
        </div>
    );
}

export default App;