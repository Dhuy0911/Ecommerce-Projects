import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../Header/Header.css';
import { Avatar, Badge, Drawer, } from 'antd';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartSideBar from '../Cart/CartSideBar';
import { connect } from 'react-redux';


const Header = (props) => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const showDrawer1 = () => {
        setOpen1(true);
    };
    const showDrawer2 = () => {
        setOpen2(true);
    };
    const onClose1 = () => {
        setOpen1(false);
    };
    const onClose2 = () => {
        setOpen2(false);
    };



    let totalProduct = 0;
    let totalPrice = 0;
    cart.forEach((cartItem) => {
        totalProduct += cartItem.quantity;
        totalPrice = totalPrice + cartItem.quantity * Number(cartItem.price);

    });






    return <>
        <header className="header">
            <nav className="header__navigation">
                <div className="container">
                    <div className="header__navigation-wrapper">

                        <div onClick={() => navigate('/')} className="header__navigation-wrapper--logo">
                            <img src="https://cdn.shopify.com/s/files/1/0275/1027/6157/files/logo_300x300.png?v=1613788961" alt="" />
                        </div>

                        <ul className="header__navigation-wrapper--links">
                            <li><NavLink to="/" end>
                                Home
                            </NavLink></li>
                            <li><NavLink to="/shop" end>
                                Shop
                            </NavLink></li>
                            <li><NavLink to="/cart" end>
                                Cart
                            </NavLink></li>
                            <li><NavLink to="/pages" end>
                                Pages
                            </NavLink></li>


                        </ul>
                        {/* <!-- Toggle Mobile --> */}
                        <div className="header__navigation-mobile--wrapper">
                            <div onClick={showDrawer1} className="header__navigation-mobile--toggle">
                                <i className="fa-solid fa-bars"></i>
                            </div>
                            <div className="header__navigation-mobile--menu">
                                <div className="closeBtn">
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                                <Drawer placement="left" onClose={onClose1} open={open1} >
                                    <ul className="header__navigation-mobile--links">
                                        <li><NavLink to="/" end>
                                            Home
                                        </NavLink></li>
                                        <li><NavLink to="/shop" end>
                                            Shop
                                        </NavLink></li>
                                        <li><NavLink to="/cart" end>
                                            Cart
                                        </NavLink></li>
                                        <li><NavLink to="/pages" end>
                                            Pages
                                        </NavLink></li>
                                       
                                    </ul>
                                </Drawer>
                            </div>
                            <div className="header__navigation-mobile--actions ">
                                <ul className="icons">
                                    <li>
                                        <Badge count={totalProduct}>

                                            <Link onClick={showDrawer2} className="cartBtn">
                                                <i className="fa-solid fa-bag-shopping"></i>
                                            </Link>
                                        </Badge>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* <!-- End Toggle Mobile --> */}

                        <div className="header__navigation-wrapper--actions">
                            <ul className="icons">
                                <li>
                                    <Badge count={totalProduct}>
                                        <Link onClick={showDrawer2} className="cartBtn">
                                            <i className="fa-solid fa-bag-shopping"></i>
                                        </Link>
                                    </Badge>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <CartSideBar cart={cart} totalPrice={totalPrice} totalProduct={totalProduct} onClose2={onClose2} open2={open2} />



        </header>

    </>
}
const mapStateToProps = state => {
    return {
        numberCart: state.cart.numberCart,
        cart: state.cart.cart,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        AddToCart: item => dispatch()
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)