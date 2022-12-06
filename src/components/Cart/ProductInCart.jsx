import '../Header/Header.css'

const ProductInCart = (props) => {
    const { handleRemoveProduct,updateQuantity,cartItem } = props

    return <div className="cart-product">
        <div className="cart-product__content">
            <h4>
                <p className="name" href="">{cartItem.name}</p>
            </h4>
            <p>
                <span onClick={() => updateQuantity(cartItem, -1)} className="minusItem btnCart"><i className="fa-solid fa-minus"></i></span>
                <span className="quantity">{cartItem.quantity}</span>
                <span  onClick={() => updateQuantity(cartItem , 1)}  className="plusItem btnCart"><i className="fa-solid fa-plus"></i></span>
                <span className="price">${cartItem.price}</span>
            </p>
        </div>

        <div className="cart-product__image">
            <img src={cartItem.image} alt="" />
            <div onClick={() => handleRemoveProduct(cartItem)}  className="cart-product__remove-btn">
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>
}

export default ProductInCart;