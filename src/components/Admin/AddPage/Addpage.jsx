import {
    Button,
    Form,
    Input,
    notification,
    Upload
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import appAxios from '../../../service/axios';
import axios from 'axios';
import { CONFIG } from '../../../service/utils';

const AddPage = () => {
    const [loading, setLoading] = useState(false)
    const onFinish = async (values) => {
        setLoading(true)
        //upload method POST
        //upload image
        try {

            // upload image to get imageUrl
            // const file = values.imageUrl.file.originFileObj;
            // const formData = new FormData();
            // formData.append('file',file)
            // const uploadData = await appAxios.post(`/products`,formData)


            const addProductData = {
                name: values.name,
                price: values.price,
                description: values.description,
            };

            const newProduct = await axios.post(`${CONFIG.API_URL}/products`, addProductData)

            if (newProduct) {
                notification.success({
                    title: 'success',
                    message: 'Add product success'
                })
            }



        } catch (e) {
            notification.error({
                title: 'error',
                message: 'Add product failed',
            });
        }
        setLoading(false)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <Form
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
                textAlign:'center'
            }}
        >
            <Button loading={loading} type="primary" htmlType="submit">
                Add
            </Button>
        </Form.Item>
    </Form>

}

export default AddPage