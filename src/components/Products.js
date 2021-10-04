import React from 'react'
import icon1 from '../asserts/images/icon-1.png'
import icon2 from '../asserts/images/icon-2.png'
import icon3 from '../asserts/images/icon-3.png'
import icon4 from '../asserts/images/icon-4.png'
import icon5 from '../asserts/images/icon-5.png'
import icon6 from '../asserts/images/icon-6.png'
import item1 from '../asserts/images/Shop-1.png'
import item2 from '../asserts/images/Shop-2.png'
import item3 from '../asserts/images/Shop-3.png'
import item4 from '../asserts/images/Shop-4.png'
import item5 from '../asserts/images/Shop-5.png'
import item6 from '../asserts/images/Shop-6.png'
import item7 from '../asserts/images/Shop-7.png'
import item8 from '../asserts/images/Shop-8.png'
import item9 from '../asserts/images/Shop-9.png'
import item10 from '../asserts/images/Shop-10.png'
import item11 from '../asserts/images/Shop-11.png'
import item12 from '../asserts/images/Shop-12.png'


import "../css/Products.css"
import Productcard from './Productcard'

const Products = () => {
    return (
        <div className="product_container">
            <div className="head"><h2>Our Products</h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p> </div>
            <div className="product_action">
            <div className="pa1">
            <img src={icon6} alt="" />
            <h2>Milk</h2>
            </div>
            <div className="pa1">
            <img src={icon5} alt="" />
            <h2>Fruits</h2>
            </div>
            <div className="pa1">
            <img src={icon4} alt="" />
            <h2>Flour</h2>
            </div>
            <div className="pa1">
            <img src={icon3} alt="" />
            <h2>Meat</h2>
            </div>
            <div className="pa1">
            <img src={icon2} alt="" />
            <h2>Vegies</h2>
            </div>
            <div className="pa1">
            <img src={icon1} alt="" />
            <h2>Eggs</h2>
            </div>
            </div>
            <div className="allproducts">
            <Productcard image={item1} quantity={[3 ,2,1]} name="Watermalon" currentprice="$100.00" />
        
            <Productcard image={item2} quantity={[5 ,3,1]} name="Capsicum" currentprice="$400.00" prevprice="$401.00" save="0%" />

            <Productcard image={item3} quantity={[4 ,5,3]} name="Coriander" currentprice="$400.00"  />

            <Productcard image={item4} quantity={[3 ,5,2]} name="Egg" currentprice="$200.00"  />

            <Productcard image={item5} quantity={[2 ,3,4]} name="Chiken Brest" currentprice="$500.00" />

            <Productcard image={item6} quantity={[4 ,5,1]} name="Badam" currentprice="$300.00" prevprice="$301.00" save="0%"/>

            <Productcard image={item7} quantity={[2 ,3,1]} name="Nuts Cookies" currentprice="$319.00"/>

            <Productcard image={item8} quantity={[3 ,2,1]} name="TM Rice" currentprice="$523.00"/>

            <Productcard image={item9} quantity={[2 ,3,1]} name="Capsicum" currentprice="$129.00" prevprice="$295.00" save="56%"/>

            <Productcard image={item10} quantity={[1 ,2,3]} name="Potato" currentprice="$329.00" />

            <Productcard image={item11} quantity={[1 ,3,5]} name="Fresh Meat" currentprice="$549.00" />

            <Productcard image={item12} quantity={[1 ,2,5]} name="Fish Curry" currentprice="$459.00"  />
            </div>
        </div>
    )
}

export default Products
