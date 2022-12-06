import { useEffect } from "react"
import { Space, Table, Tag, Button, notification } from 'antd';
import { useNavigate } from "react-router-dom";
import CustomTable from "./CustomTable/CustomTable";
import { useState } from "react";
import appAxios from "../../service/axios";

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleFetchProduct = async (limit, page) => {
        setLoading(true)
        try {
            const productData = await appAxios.get(`/products`, {
                params: { limit, page }
            })
            setProducts(productData.data)





        } catch (e) {
            notification.error({
                title: 'error',
                message: 'Something went wrong'
            })
        }
        setLoading(false);
    }


    useEffect(() => {
        handleFetchProduct();
    }, [])

    const columns = [
        {
            title: "Product Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (url) => {
                return <img src={url} style={{ width: "150px" }} />;
            },
        },
        {
            title: "Short description",
            dataIndex: "description",
            key: "description",
            render: (text) => {
                const shortDes = text.substring(0, 20) + "...";
                return <div>{shortDes}</div>;
            },
        },
        {
            title: "Actions",
            dataIndex: "id",
            key: "_id",
            render: (id) => {
                return (
                    <>
                        <Button
                            onClick={() => navigate(`/user/admin/editproduct/${id}`)}
                            type="primary"
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => handleDeleteProduct(id)}
                            type="primary"
                            danger
                         style={{
                            marginLeft:"7px"
                         }}>
                            Delete
                        </Button>
                    </>
                );
            },
        },
    ];
    const handleDeleteProduct = async (id) => {
        if (window.confirm('Delete this products ?')) {
            setLoading(true)
            try {
                await appAxios.delete(`/products/${id}`)

                handleFetchProduct()
            } catch (e) {
                notification.error({
                    title: 'error',
                    message: 'Something went wrong'
                })
            }
            setLoading(false)
        }
    };
    return <div>
        <CustomTable
            columns={columns}
            dataSource={products}
            loading={loading}
            total={products.length}

        />

    </div>
}
export default Admin