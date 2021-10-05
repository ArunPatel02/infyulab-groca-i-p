import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../asserts/images/logo_300x300.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import DehazeIcon from '@mui/icons-material/Dehaze';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "../css/Header.css"

const Header = () => {
    return (
        <div className="header_conatiner">
            <div className="header">
                <div className="header_strip">
                    <div className="left">
                        <CallIcon className="call"/> 
                        <p>(00) 000 111 222</p>
                        <div className="line"></div>
                        <EmailIcon />
                        <p>info@somedomsin.com</p>
                    </div>
                    <div className="right">
                        <TwitterIcon />
                        <FacebookOutlinedIcon />
                        <GoogleIcon />
                        <InstagramIcon/>
                        <div className="line"></div>
                        <select name="country" id="country" defaultValue="USA">
                            <option value="india">IND</option>
                            <option value="USA" >USA</option>
                            <option value="UK">UK</option>
                            <option value="china">CHINA</option>
                        </select>
                    </div>
                </div>
                <div className="header_middle">
                    <div className="logo"><img src={logo} alt=""/></div>
                        <ul className="navigation">
                            <li>Home</li>
                            <li>Shop <ArrowDropDownIcon/></li>
                            <li>Best Seller <ArrowDropDownIcon/></li>
                            <li>deal of the day <ArrowDropDownIcon/></li>
                            <li>pages <ArrowDropDownIcon/></li>
                            <li>contact us</li>
                        </ul>
                        <DehazeIcon className="toggle"/>
                    <div className="user_action">
                        <FavoriteBorderIcon />
                        <ShoppingCartOutlinedIcon />
                        <PersonIcon />
                    </div>
                </div>
                <div className="header_bottom">
                    <div className="all_departments">
                        <DehazeIcon />
                        <p>All Departments</p>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="search_container">
                        <div className="all_catagories"><p>All catagories</p> <KeyboardArrowDownIcon /></div>
                        <div className="line"></div>
                        <input type="text" name="search" id="search" placeholder="Search here" />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
