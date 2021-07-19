import React,{useState} from 'react'
import './Payment.css'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
import {CardElement, useStripe , useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import getBasketTotal from "./reducer"


function Payment() {
    const [{basket , user},dispatch] = useStateValue();

const stripe = useStripe();
const elements = useElements();
const[error,setError] = useState(null);
const[disabled,setDisabled] = useState(true);


const handleSubmit = e => {
//do all the fancy stripe stuff...
}

const handleChange = event =>{
    //Listen for changes in the card element
    //and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");

}

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout (<Link to ="/checkout">{basket?.length} items</Link>)</h1>
                {/* payment section - delivery address */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                        </div>
                        <div className='payment_address'>
                            <p>{user?.email}</p>
                            <p>123 react lane</p>
                            <p>los angeles,CA</p>


                        </div>
                </div>

                {/* payment section - review items */}
                <div className='payment_section'>
                <div className='payment_title'>
                <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
                {basket.map(item => (
        <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        />
    ))}

                </div>
                </div>

                {/* payment section - payment method */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        {/* stripe magic will go */}

                        <form onSubmit ={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                renderText={(value)  => (
                                    
                                    <h3>Order Total : {value}</h3>
                                 
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeperator={true}
                                prefix={"&#83   77"}
                                />

                            </div>
                        </form>
                    </div>
                    </div>
                    </div>
                     </div>
    )
}

export default Payment
