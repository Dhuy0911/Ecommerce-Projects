import { notification } from 'antd';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { cartActionTypes } from '../../store/actionsType/cartActionTypes';
import '../FeaturedProducts/FeaturedProductsList.css';



const FeaturedProducts = (props) => {
    const { cart, setCart } = useContext(CartContext);
    // const cartState = useSelector(state => state.cart)
    const navigate = useNavigate();
    const params = useParams();
    const { product } = props;
    const handleAddToCart = (e) => {
        // tao 1 cart moi dua len cart
        const newCart = [...cart];
        const productIndex = newCart.findIndex(productElement => {
            return productElement.id === product.id

        });
        if (productIndex !== -1) {
            newCart[productIndex].quantity = newCart[productIndex].quantity + 1;
            alert('add to cart success');
            return
        }
        const newCartProduct = {
            ...product,
            quantity: 1
        };

        newCart.push(newCartProduct);
        setCart(newCart);

        notification.success({
            title: 'success',
            message: 'Add to cart success'
        })


    }

    const handleToDetail = () => {
        navigate(`/product/${product.id}`)
    }
    return <>
        <div className="card featured-products__product">
            <div className="featured-product__product-thumb">

                <img src={product.image} alt="" />
                <div className="quickview-section">
                    <ul>
                        <li><p onClick={handleAddToCart} style={{ cursor: 'pointer' }} className="cart-productBtn"><i className="fa-sharp fa-solid fa-bag-shopping"></i></p>
                        </li>
                        <li><p onClick={handleToDetail} style={{ cursor: 'pointer' }} className="quickview" href="#"><i className="fa-solid fa-eye"></i></p></li>
                        <li><p className="heart"><i className="fa-regular fa-heart"></i></p></li>
                    </ul>
                </div>

            </div>

            <div className="card-body featured-products__product-des">
                <ul className="icons d-flex">
                    <li><i className="fa-sharp fa-solid fa-star"></i></li>
                    <li><i className="fa-sharp fa-solid fa-star"></i></li>
                    <li><i className="fa-sharp fa-solid fa-star"></i></li>
                    <li><i className="fa-sharp fa-solid fa-star"></i></li>
                    <li><i className="fa-sharp fa-solid fa-star"></i></li>
                </ul>
                <p className='name'>{product.name}</p>
                <p className="price">${product.price}</p>

            </div>
        </div>
        {

        }

    </>
}

export default FeaturedProducts;