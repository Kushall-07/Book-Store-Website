import React, { useState } from "react";

function Cart({ cart, setCheckout, setPurchaseOptions }) {
    const [localPurchaseOptions, setLocalPurchaseOptions] = useState({});

    const handleOptionChange = (id, option) => {
        setLocalPurchaseOptions((prev) => ({ ...prev, [id]: option }));
        setPurchaseOptions((prev) => ({ ...prev, [id]: option })); 
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length > 0 ? (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            {/* Added Image Display */}
                            <img src={item.image} alt={item.title} className="cart-image" />
                            
                            <p>{item.title} - ${item.price}</p>
                            
                            <label>
                                <input 
                                    type="radio" 
                                    name={`option-${item.id}`} 
                                    value="buy" 
                                    checked={localPurchaseOptions[item.id] === "buy"} 
                                    onChange={() => handleOptionChange(item.id, "buy")}
                                /> Buy
                            </label>

                            <label>
                                <input 
                                    type="radio" 
                                    name={`option-${item.id}`} 
                                    value="rent" 
                                    checked={localPurchaseOptions[item.id] === "rent"} 
                                    onChange={() => handleOptionChange(item.id, "rent")}
                                /> Rent (30% of Price)
                            </label>
                        </div>
                    ))}
                    
                    <button onClick={() => setCheckout(true)}>Proceed to Checkout</button>
                </>
            ) : (
                <p><b><i>YOUR CART IS EMPTY.</i></b></p>
            )}
        </div>
    );
}

export default Cart;