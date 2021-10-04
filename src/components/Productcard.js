import React from 'react'
import StarIcon from '@mui/icons-material/Star';

import "../css/Products.css"

const Productcard = (props) => {
    return (
        <div className="card">
            <div className="cardimage"><img src={props.image} alt="" /></div>
            <div className="quantity">
                {props.quantity.map((quan)=><div className="quan">{`${quan} kg`}</div>)}
            </div>
            <div className="cardname">{props.name}</div>
            <div className="stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
            <div className="price">
                <div className="current">{props.currentprice}</div>
                {props.prevprice&&<div className="previous">{props.prevprice}</div>}
            </div>
            <button className="add">Add To Cart</button>
            {props.save && <><div className="saletag">sale</div>
            <div className="savetag">save <h1>{props.save}</h1> </div></>}
        </div>
    )
}

export default Productcard
