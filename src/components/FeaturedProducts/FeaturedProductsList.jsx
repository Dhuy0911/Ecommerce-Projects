import { Button, Spin } from 'antd';
import { useState } from 'react';
import FeaturedProducts from './FeaturedProducts';
import './FeaturedProductsList.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';



const FeaturedProductsList = (props) => {
    const { loading, products } = props
    const [size, setSize] = useState('large');
    const navigate = useNavigate();




    return <>
        {/* <!-- Featured Products --> */}

        <section id="featured-products">
            <div className="container">
                <div className="featured-products__content">
                    <h1>Featured Products</h1>
                </div>

                <div className="row ">
                    <div className="col-12">


                        {loading ? <Loading/> : <div className="product-list d-flex justify-content-center flex-wrap">
                            {
                                products.map((product) => {
                                    return <FeaturedProducts product={product} key={product.id} />

                                })
                            }

                        </div>}
                    </div>
                    <div className='text-center my-3'>
                        <button className='viewMoreBtn'
                            onClick={() => navigate('/shop')}
                            shape="round" >

                            View more
                        </button>
                    </div>

                </div>




            </div>
        </section>



        {/* <!-- End Featured Products --> */}
    </>

}
export default FeaturedProductsList;