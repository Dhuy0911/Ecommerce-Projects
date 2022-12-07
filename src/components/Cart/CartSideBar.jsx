import { useContext } from 'react';
import { useState } from 'react';
import CartContext from '../../context/CartContext';
import '../Header/Header.css';
import ListProductInCart from './ListProductInCart';
import ProductInCart from './ListProductInCart';
import {  Button, Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';

const CartSideBar = (props) => {
    const { totalPrice,totalProduct, onClose2,open2 } = props;
    const navigate = useNavigate();
  






    return <>
        {/* Cart */}
        <Drawer title="Shopping Cart" placement="right" onClose={onClose2} open={open2}>
        <div className="cart-wrapper">
                <div onClick={onClose2} className="closeBtn">
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <h3>Shopping Cart</h3>

                <ListProductInCart />
                <div className="cart-total d-flex justify-content-between fw-bold fs-4">
                    <p>Subtotal: {totalProduct} </p>
                    <p>$ <span className="total-price">{totalPrice}.00</span></p>
                </div>
                <div className='text-center'>
                    <button className='view-cartBtn' onClick={() => {navigate('/cart')}} >View your cart</button>
                </div>
            </div>
      </Drawer>

    </>
}

export default CartSideBar;