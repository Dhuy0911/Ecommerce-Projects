import { Button, Spin } from 'antd';
import { useState } from 'react';
import FeaturedProducts from './FeaturedProducts';
import './FeaturedProductsList.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';



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


                        {loading ? <Spin /> : <div className="product-list d-flex justify-content-center flex-wrap">
                            {
                                products.map((product) => {
                                    return <FeaturedProducts product={product} key={product.id} />

                                })
                            }

                        </div>}
                    </div>
                    <div className='text-center my-3'>
                        <Button style={{
                            textAlign: 'center',
                            background: 'var(--black)',
                            color: 'var(--white)',
                            outline: 'none',
                            border: 'none',
                            margin: '20px'
                        }}
                            onClick={() => navigate('/shop')}
                            icon={<ArrowRightOutlined />}
                            shape="round"
                            size={size} >

                            View more
                        </Button>
                    </div>

                </div>




            </div>
        </section>



        {/* <!-- End Featured Products --> */}
    </>

}
export default FeaturedProductsList;