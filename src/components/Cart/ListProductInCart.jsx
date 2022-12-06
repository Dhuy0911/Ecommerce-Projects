import { notification } from 'antd';
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import '../Header/Header.css'
import ProductInCart from './ProductInCart';

const ListProductInCart = () => {
    const { cart, setCart } = useContext(CartContext);
    const handleUpdateQuantity = (product, quantity) => {
        const newCart = [...cart];
        const productIndex = newCart.findIndex(productElement => {
            return productElement.id === product.id
        })


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




    return <>
        {
            cart.map((cartItem) => {
                return <ProductInCart handleRemoveProduct={handleRemoveProduct} updateQuantity={handleUpdateQuantity} key={cartItem.id} cartItem={cartItem} />
            })
        }
    </>
}

export default ListProductInCart