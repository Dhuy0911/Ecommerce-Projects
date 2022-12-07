import Footer from '../../components/Footer/Footer';
import '../DetailProduct/DetailProduct.css';
import { Collapse, notification } from 'antd';
import RelatedProduct from './RelatedProduct';
import { Breadcrumb } from 'antd'
import '../ProductsShopPage/ProductsShopPage.css'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import appAxios from '../../service/axios';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';


const DetailProduct = () => {
    const { cart, setCart } = useContext(CartContext);
    const [count, setCount] = useState(1);
    const { Panel } = Collapse;
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const onChange = (key) => {
        console.log(key);
    }
    const [product, setProduct] = useState([]);
    const params = useParams()
    const handleFetchProduct = async (id) => {
        setLoading(true)
        try {
            const productData = await appAxios.get(`/products/${id}`)

            setProduct(productData.data)


        } catch (e) {
            notification.error({
                title: 'error',
                message: 'Some thing went wrong'
            })
            console.log('handleFetchProduct', e)
        }
        setLoading(false)

    }
    useEffect(() => {
        handleFetchProduct(params.id)
    }, [params.id])
    const handleAddToCart = (count) => {
        // tao 1 cart moi dua len cart
        const newCart = [...cart];
        const productIndex = newCart.findIndex(productElement => {
            return productElement.id === product.id

        });
        if (productIndex !== -1) {
            newCart[productIndex].quantity = newCart[productIndex].quantity + 1;
            notification.success({
                title: 'success',
                message: 'Add to cart success'
            });
            return
        }
        const newCartProduct = {
            ...product,
            quantity: count
        };

        newCart.push(newCartProduct);
        setCart(newCart);
        notification.success({
            title: 'success',
            message: 'Add to cart success'
        })

        console.log(count)


    }

    const updateQuantity = (quantity) => {

        if (!count >= 1) {
            notification.error({
                title: 'error',
                message: 'Min allowed quantity is 1'
            })
            setCount(1)
            return
        }
        setCount(count + quantity)
        return


    }

    return <>  <Header />
       <section id="product">
            <div className="productName">
                <h2>{product.name}</h2>
                <div className='breadCumb'>
                    <Breadcrumb style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Breadcrumb.Item>
                            <a href="/">Home</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="/shop">Shop</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <p>{product.name}</p>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
            <div className="container">
                <div className="productDetail__wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-12 d-flex">
                            <div className="product-img">
                                <img src={product.image}
                                    alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="product-detail">
                                <h2>{product.name}</h2>
                                <ul className="icons d-flex">
                                    <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                    <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                    <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                    <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                    <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                </ul>
                                <p className="price">${product.price}</p>
                                <p className='description'>{product.description}</p>

                                <ul className="additional d-flex">
                                    <li><a href="#"><i className="fa-solid fa-pen-ruler"></i> Size Guide</a></li>
                                    <li><a href="#"><i className="fa-solid fa-truck"></i> Shipping </a></li>
                                    <li><a href="#"><i className="fa-regular fa-envelope"></i> Ask About This Product</a></li>
                                </ul>
                            </div>
                            <div className="payment">
                                <div className="quantity-wrapper d-flex">
                                    <p>Quantity: </p>
                                    <span onClick={() => updateQuantity(-1)} className="minusItem btnCart"><i className="fa-solid fa-minus"></i></span>
                                    <span className="quantity">{count}</span>
                                    <span onClick={() => updateQuantity(1)} className="plusItem btnCart"><i className="fa-solid fa-plus"></i></span>
                                    <hr />
                                </div>
                                <button onClick={() => handleAddToCart(count)} className='addToCartBtn'>Add To Cart</button>
                                <button onClick={() => navigate('/cart')} className='buyNowBtn' >View Cart</button>

                                <p>Guaranteed safe checkout</p>
                                <ul className='appPay' >
                                    <li>
                                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg"
                                            alt="" />
                                    </li>
                                    <li>
                                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"
                                            alt="" />
                                    </li>
                                    <li>
                                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg"
                                            alt="" />
                                    </li>
                                    <li>
                                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                                            alt="" />
                                    </li>
                                    <li>
                                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/shopify_pay-100fde795157a3d1c18042346cf8dbd1fcf4c4f53c20064e13ea2799eb726655.svg"
                                            alt="" />
                                    </li>
                                    <li>
                                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
                                            alt="" />
                                    </li>
                                    <li>
                                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg"
                                            alt="" />
                                    </li>

                                </ul>
                                <div className="share d-flex">
                                    <p>Share: </p>
                                    <ul className="widget-social d-flex justify-content-center">
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-google-plus-g"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
        <section id="box-detail">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className="box-detail__wrapper d-flex">
                            <Collapse style={{
                                width: '100%',
                            }} defaultActiveKey={['1']} onChange={onChange}>
                                <Panel header="Description" key="1">
                                    <p>{product.description}</p>
                                </Panel>
                                <Panel header="Reviews" key="2">
                                    <p>Customer Reviews
                                        No reviews yet</p>
                                    <a href="#">Write a review</a>
                                </Panel>
                                <Panel header="Shipping Policy" key="3">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                                        iriure dolor in hendrerit in vulputate
                                        <ul>
                                            <li>
                                                1-2 business days (Typically by end of day)
                                            </li>
                                            <li>
                                                30 days money back guaranty
                                            </li>
                                            <li>
                                                24/7 live support
                                            </li>
                                            <li>
                                                odio dignissim qui blandit praesent
                                            </li>
                                            <li>
                                                luptatum zzril delenit augue duis dolore
                                            </li>
                                            <li>
                                                te feugait nulla facilisi.
                                            </li>
                                        </ul>
                                        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
                                        placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui
                                        facit eorum
                                        claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                                        notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas
                                        humanitatis per
                                        seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari,
                                        fiant sollemnes in futurum.</p>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>

                </div>
            </div>
        </section> 
        {/* <div className='relatedProduct text-center'>
            <h1>Related Products</h1>
        <RelatedProduct />
        </div> */}
        <Footer />
    
    </>
}

export default DetailProduct;