import '../ProductsList/ProductsList'
import Products from '../ProductsList/Products'


const ProductsList = (props) => {
    const { products, } = props;

    return <>
        {
            products.map((product) => {
                return <>
                 <Products product={product} key={product.id} />
                </>
            })
        }
    </>

}
export default ProductsList