import React from 'react'
import './Checkout.css'
import Subtotal from "./Subtotal"
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from './StateProvider'

function Checkout() {
    const [{basket , user},dispatch]=useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className="checkout_ad" src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' />
                <div>
                    <h3>HELLO , {user?.email}</h3>
                    <h2 className="checkout_title">
                        YOUR SHOPPING BASKET
                    </h2>
                    {basket.map(item=>(<CheckoutProduct 
                id={item.id}
                price={item.price}
                image={item.image}
                title={item.title}
                rating={item.rating}
                />
                ))}
                    </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout
