import React, { useState } from "react";

function Checkout({ cart, purchaseOptions }) {
    const [review, setReview] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [paymentOption, setPaymentOption] = useState("");
    const [showPaymentForm, setShowPaymentForm] = useState(false); 
    const [confirmDetails, setConfirmDetails] = useState(null); 
    // Calculate final price based on rent/buy choice
    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            const isRented = purchaseOptions[item.id] === "rent";
            const price = isRented ? item.price * 0.3 : item.price; 
            return total + price;
        }, 0).toFixed(2);
    };

    // Handle payment confirmation
    const handleConfirmPayment = () => {
        if (firstName && lastName && paymentOption) {
            setConfirmDetails({ name: `${firstName} ${lastName}`, payment: paymentOption });
            setShowPaymentForm(false); 
        } else {
            alert("Please fill out all details before proceeding!");
        }
    };

    return (
        
        <div className="checkout"><center>
            <h2>Checkout</h2>
            {cart.map((item) => (
                <div key={item.id} className="checkout-item">
                    <p>
                        {item.title} - 
                        {purchaseOptions[item.id] === "rent" ? ` Renting for $${(item.price * 0.3).toFixed(2)}` : ` Buying for $${item.price}`}
                    </p>
                </div>
            ))}

            <h3>Total Price: ${calculateTotal()}</h3>

            {!showPaymentForm && !confirmDetails ? (
                <button className="button" onClick={() => setShowPaymentForm(true)}>
                    Proceed to Payment
                </button>
            ) : null}

            {showPaymentForm && (
                <div className="payment-form">
                    <h3>Enter Your Details:</h3>
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                    />

                    <h3>Select Payment Option:</h3>
                    <select value={paymentOption} onChange={(e) => setPaymentOption(e.target.value)}>
                        <option value="">Choose Payment Method</option>
                        <option value="upi">UPI</option>
                        <option value="paypal">PayPal</option>
                    </select>

                    <button className="button" onClick={handleConfirmPayment}>Confirm Payment</button>
                </div>
            )}

            {/* Show Confirmation Details */}
            {confirmDetails && (
                <div className="confirmation">
                    <h3>Payment Successful!</h3>
                    <p><b>Name : {confirmDetails.name}</b> </p>
                    <p><b>Payment Method : {confirmDetails.payment === "upi" ? "UPI" : "PayPal"}</b> </p>
                </div>
            )}

            <h3>Leave a Review:</h3>
            <textarea 
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
            </center>
        </div>
    );
}

export default Checkout;