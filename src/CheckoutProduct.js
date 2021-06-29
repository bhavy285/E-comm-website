import React from 'react'
import StarIcon from '@material-ui/icons/Star';

import './checkoutProduct.css'
// import reducer from './reducer'
import {useStateValue} from './StateProvider';
function CheckoutProduct({id,image, price,title,rating}) {
    const [{basket},dispatch]= useStateValue();

    const removeFromBasket= ()=>
    {
        //remove the items from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
           
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} / >
                <div className="checkoutProduct_info">
                <p classname="checkoutProduct_title">{title}    </p>
                <p classname="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>    </p>
                <p className="checkoutProduct_rating">
                {Array(rating).fill().map((_, i) => (
                        <p><StarIcon /></p>)
                    )}
                    </p>    
<button className="mbtn" onClick={removeFromBasket}>Remove from Basket</button>
               
                </div>
        </div>
    )
}

export default CheckoutProduct;
