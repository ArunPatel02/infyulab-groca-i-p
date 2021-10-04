import React from 'react'
import bannerico from '../asserts/images/banner-icon.png'
import bannerimg from '../asserts/images/banner.jpg'
import image1a from '../asserts/images/image1a.jpg'
import image2a from '../asserts/images/image2a.jpg'

import "../css/Banner.css"

const Banner = () => {
    return (
        <>
        <div>
            <div className="image_conatiner">
                <img src={bannerimg} alt="" className="bannerimage"/>
                <div className="bannertext">
                <img src={bannerico} alt="" />
                <h3>100% Healthy & Affordable</h3>
                <h1> Organic Vegetables</h1>
                <h3>Small Changes Big Difference</h3>
                <button className="shopnow">Shop Now</button>
                </div>
            </div>
        </div>
        <div className="reccomded">
            <div className="rc1">
                <img src={image1a} alt="" />
                <div className="rcdesc ">
                    <div className="heading">Veggies</div>
                <div className="desc"><b>100% </b> Organic Products</div>
                <button className="buy">Buy Now</button>
                </div>
                
            </div>
            <div className="rc1">
                <img src={image2a} alt="" />
                <div className="rcdesc rc2">
                    <div className="heading">Fruits</div>
                <div className="desc"><b>100% </b> Organic Products</div>
                <button className="buy">Buy Now</button>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Banner
