import { useEffect } from "react"
import { useParams } from "react-router-dom"
import appAxios from "../../../service/axios";
import AddPage from "../AddPage/Addpage"
import {
    Button,
    Form,
    Input,
    notification,
    Upload
} from 'antd';
import { useState } from "react";
import axios from "axios";
import { CONFIG } from "../../../service/utils";

const EditPage = () => {
    const [loading, setLoading] = useState(false)

    const params = useParams();

    const [productForm] = Form.useForm();

    const fetchProduct = async (id) => {
        try {
            const productData = await appAxios.get(`/products/${id}`)

            productForm.setFieldsValue(productData.data)
        } catch (e) {
            notification.error({
                title: 'error',
                message: 'Something went wrong',
            });
            console.log(e)
        }

    }

    const onFinish = async (values) => {
        try {
            if (params.id) {
                const editData = {
                    name:values.name,
                    price:values.price,
                    description:values.description

                }
                const newData = await axios.put(`${CONFIG.API_URL}/products/${params.id}`, editData);
                if (newData) {
                    notification.success({
                        title: 'success',
                        message: 'Edit product success'
                    });

                    return;
                }


            }
        } catch (e) {
            notification.error({
                title: 'error',
                message: 'Something went wrong',
            });
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        fetchProduct(params.id)
    }, [params.id])

    return <Form
        form={productForm}

        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 8,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="Product Name"
            name="name"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Price"
            name="price"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item label="Description"
            name='description' >
            <Input.TextArea />
        </Form.Item>

        {/* <Form.Item
            style={{
                textAlign: "left"
            }}
            name='imageUrl'
            rules={[
                {
                    required: true,
                    message: 'Pls choose an image'
                },
            ]}
            label="Image">
            <Upload listType="picture-card">
                <div>
                    <PlusOutlined />
                    <div
                        style={{
                            marginTop: 8,
                        }}
                    >
                        Upload
                    </div>
                </div>
            </Upload>
        </Form.Item> */}


        <Form.Item
            wrapperCol={{
                span: 24,
            }}
            style={{
                textAlign: 'center'
            }}
        >
            <Button loading={loading} type="primary" htmlType="submit">
                Save
            </Button>
        </Form.Item>
    </Form>
}
export default EditPage