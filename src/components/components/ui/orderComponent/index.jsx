import React from 'react'
import YourOrderInner from "../OrdercomplaintItemComponent";
import { Link } from 'react-router-dom';

function YourOrder(){
  return (
    <div>
        <div>
            <div> <YourOrderInner></YourOrderInner> </div>
            <div>
                <span className='green'></span><p>Delivery On 14 Apr </p>
                <span>Your order hass been delievered</span>
            </div>
        </div>
        <div>
            {/* star icon add karna h */}
            <span>
                rate our product
            </span>
            <Link to="/complaint">
                <span onClick={() => {}}> 
                leave complaint or feedback
                </span>
            </Link>
        </div>
    </div>
  )
}

export default YourOrder