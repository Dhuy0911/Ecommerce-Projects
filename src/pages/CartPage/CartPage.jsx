
import '../ProductsShopPage/ProductsShopPage.css';
import { Space, Table, Tag, Breadcrumb, Button } from 'antd';
import CartInfomation from './CartInfomation';
import ProductInCart from '../../components/Cart/ProductInCart';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addToCartFetchProduct } from '../../store/actions/cartAction';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import ListProductInCart from '../../components/Cart/ListProductInCart';
import CartTable from './CartTable';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';


const CartPage = (props) => {
    const { cart, setCart } = useContext(CartContext);
    let totalProduct = 0;
    let totalPrice = 0;
    cart.forEach((cartItem) => {
        totalProduct += cartItem.quantity;
        totalPrice = totalPrice + cartItem.quantity * Number(cartItem.price);
    });

    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUpdateQuantity = (product, quantity) => {
        const newCart = [...cart];
        const productIndex = newCart.findIndex(productElement => {
            return productElement.id === product.id
        })
        console.log()


        if (productIndex !== -1) {
            if (newCart[productIndex].quantity === 1 && quantity === -1) {
                if (window.confirm('Delete this product')) {
                    newCart.splice(productIndex, 1)
                    setCart(newCart)
                    return;
                }
            }
            newCart[productIndex].quantity += quantity
            setCart(newCart)

        }

    }
    const handleRemoveProduct = (product) => {

        const newCart = [...cart];
        const productIndex = newCart.findIndex(productElement => {
            return productElement.id === product.id
        })
        if (window.confirm('Delete this product')) {
            newCart.splice(productIndex, 1)
            setCart(newCart)
            return;
        }
    }

    // const columns = [
    //     {
    //         title: "Image",
    //         dataIndex: "image",
    //         key: "image",
    //         render: (url) => {
    //             return <img src={url} style={{ width: "150px" }} />;
    //         },

    //     },
    //     {
    //         title: "Product Name",
    //         dataIndex: "name",
    //         key: "name",

    //     },
    //     {

    //         title: "Price",
    //         dataIndex: "price",
    //         key: "price",
    //     },
    //     {
    //         title: "Quantity",
    //         dataIndex: "quantity",
    //         key: "quantity",
    //         render: (quantity) => {
    //             return <>
    //                 <Button onClick={() => handleUpdateQuantity(quantity, -1)}>-</Button>
    //                 <p>{quantity}</p>
    //                 <Button onClick={() => handleUpdateQuantity(quantity, 1)}>+</Button>
    //             </>
    //         }

    //     },
    //     {
    //         title: "Actions",
    //         dataIndex: "id",
    //         key: "id",
    //         render: (id) => {
    //             return (
    //                 <>
    //                     <Button
    //                         // onClick={() => {
    //                         //     handleRemoveProduct(id)

    //                         // }
    //                         // }
    //                         type="primary"
    //                         danger
    //                         style={{
    //                             marginLeft: "7px"
    //                         }}>
    //                         x
    //                     </Button>
    //                 </>
    //             );
    //         },
    //     },
    // ];

    return <>

        <div className="breadCrumb">
            <Breadcrumb style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',

            }}>
                <Breadcrumb.Item>
                    <a href="/"> Home</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Your Cart
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>




        {/* <CartTable data={cart} columns={columns} /> */}
        <div className=' cart__wrapper d-flex justify-content-between'>
            <div className='col-lg-8 col-md-6 col-12'>
                {
                    cart.map((cartItem) => {
                        return <div key={cartItem.id}>
                            <ProductInCart handleRemoveProduct={handleRemoveProduct} updateQuantity={handleUpdateQuantity} cartItem={cartItem} />
                        </div>
                    })
                }
            </div>

            <div className='col-lg-4 col-md-6 col-12'>
                <div className='total'>
                    <CartInfomation totalProduct={totalProduct} totalPrice={totalPrice} />
                </div>
            </div>
        </div>
        <div className='col-12' style={{
            textAlign: 'center'
        }}>
            <Button onClick={() => { navigate('/shop') }} style={{
                margin: "3rem"
            }}>Continue Shopping</Button>
        </div>

        <Footer />


    </>

}


export default (CartPage);