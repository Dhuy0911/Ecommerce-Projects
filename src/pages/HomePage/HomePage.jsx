import { notification } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import FeaturedProductsList from '../../components/FeaturedProducts/FeaturedProductsList';
import Feedback from '../../components/Feedback/Feedback';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Subscribe from '../../components/Subscribe/Subscribe';
import appAxios from '../../service/axios';
import { FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const handleFetchProducts = async (limit, page) => {
        setLoading(true);
        try {
            const productsData = await appAxios.get('/products', {
                params: {
                    limit, page
                }
            })

            setProducts(productsData.data)
        } catch (e) {
            notification.error({
                title: 'error',
                message: 'Some thing went wrong'
            })
            console.log('handleFetchProduct', e)
        }
        setLoading(false);
    }
    useEffect(() => {
        handleFetchProducts(8, 1);
    }, [])
    return <>
        <Header products={products} />
        <HeroBanner />
        <FeaturedProductsList loading={loading} products={products} />
        <FloatButton.BackTop icon={<ArrowUpOutlined />} />
        <Feedback />
        <Subscribe />
        <Footer />
    </>

}

export default HomePage;