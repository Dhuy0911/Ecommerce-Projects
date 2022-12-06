import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './CartPage.css'

const CartInfomation = (props) => {
    const {cart,setCart} = useContext(CartContext);
    const {totalProduct, totalPrice} = props


    return <div className="mt-3 mx-5">
        <h1>
            Total:$ {totalPrice}.00
        </h1>
        <hr />
        <div className="card">
            <div className="card-body">
                <h3>
                    Total Products:{totalProduct}
                </h3>

                <h3>
                    Discount:
                </h3>

                <h3>
                    Ship cost:
                </h3>
            </div>
        </div>

        <h2 className="mt-2">
            Total price:$ {totalPrice}.00
        </h2>
    </div>
}

export default CartInfomation