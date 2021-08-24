import React from 'react';
import './PaymentForm.css'

const PaymentForm = ({ hidePay }) => {

    const handleClick = () => {
        hidePay()
    }

    return (
        <div className='payment-form-wrap'>
           <div className="payment-header">
               <h3>Payment</h3>
               <div className="pay-icons">
                   <i className="fa fa-credit-card"></i>
                   <i className="fa fa-cc-visa"></i>
                   <i className="fa fa-cc-mastercard"></i>
                   <i className="fa fa-cc-discover"></i>
                   <i className="fa fa-cc-amex"></i>
               </div>
           </div>
            <div className="payment-form">

                <label>Cardholder's name:</label>
                <input type="text" />

                <label>Card number:</label>
                <input maxLength="16" type="text"/>

                <div className="form-row">
                    <label>Expiration:</label>
                    <input className="exp" type="date" />

                    <label>CVV:</label>
                    <input maxLength="3" className="cvv" type="text" />
                </div>
            </div>
            <button onClick={handleClick} className="submit-payment">submit</button>
        </div>
    )
}

export default PaymentForm;

