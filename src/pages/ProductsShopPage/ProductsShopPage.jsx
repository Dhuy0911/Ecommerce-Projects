import Header from '../../components/Header/Header';
import '../ProductsShopPage/ProductsShopPage.css';
import { Breadcrumb, Layout, notification, Pagination, } from 'antd';
import Categiores from './Categories/Categories';
import { useState } from "react";
import appAxios from '../../service/axios';
import { useEffect } from 'react';
import ProductsList from './ProductsList/ProductsList';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';



const ProductsShopPage = () => {
    const { Content } = Layout;
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const handleFetchProducts = async (limit, page) => {
        setLoading(true);

        try {
            const productsData = await appAxios.get('/products', {
                params: {
                    limit, page, search
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
        const callApiTimeOut = setTimeout(handleFetchProducts(12, page), 500);// debounce
        return () => {
            clearTimeout(callApiTimeOut)
        }
    }, [page, search])

    const handlechangePagination = (page) => {
        setPage(page);
    }

    return <Layout >
        <Header />
        <Content  >
            <div className="breadCrumb">
                {/* <Breadcrumb style={{
                    width: '100%',
                    marginTop: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '20px'

                }}>
                    <Breadcrumb.Item>
                       <a href="/"> Home</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Shop
                    </Breadcrumb.Item>
                </Breadcrumb> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="leftSide">
                            <input type="text" placeholder='Search...' className='my-3' onChange={(e) => setSearch(e.target.value)} value={search} />
                            {/* <Categiores /> */}
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-6 col-12">
                        {loading ? <Loading /> : <div className="products-list d-flex flex-wrap justify-content-between">
                            <ProductsList handlechangePagination={handlechangePagination} products={products} loading={loading} />
                        </div>}
                        <Pagination onChange={handlechangePagination} style={{ textAlign: 'center', marginTop: '2rem' }} defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        </Content>
        <Footer />
    </Layout>
}

export default ProductsShopPage;