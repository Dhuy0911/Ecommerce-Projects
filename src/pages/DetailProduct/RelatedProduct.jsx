import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction } from "../../store/actions/productAction";

const RelatedProduct = (props) => {
    const {product} = props

    
    



    return <>
    {/* {
        product.map((product) => {
            return  <section key={product.id} id="related-product d-flex">
            <div className="featured-products__product">
                <div className="featured-product__product-thumb">
                    <img src={product.image} alt="" />
    
                    <div className="quickview-section">
                        <ul>
                            <li><a className="cart-productBtn" href="#"><i
                                className="fa-sharp fa-solid fa-bag-shopping"></i></a>
                            </li>
                            <li><a className="heart" href="#"><i className="fa-solid fa-eye"></i></a></li>
                            <li><a className="quickview" href="#"><i className="fa-regular fa-heart"></i></a></li>
                        </ul>
                    </div>
    
                </div>
    
                <div className="featured-products__product-des">
                    <ul className="icons d-flex">
                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                    </ul>
                    <a href="#" className="name">{product.name}</a>
                    <p className="price">${product.price}</p>
    
                </div>
            </div>
        </section>
        })
    } */}

    </>
}

export default RelatedProduct;