import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useContext } from 'react';
import { Navigate, NavLink, Outlet } from 'react-router-dom/dist';
const { Header, Content, Sider } = Layout;


const AdminLayout = () => {
    const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });
    return (

        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}
                >
                    <Menu.Item>
                        <NavLink to="/user/admin/dashboard">
                            Dashboard
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/user/admin/addproduct">
                            Add Product
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout
                style={{
                    padding: '0 24px 24px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item ><a href="/">Go to Home Page</a></Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard Product</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: '100vh',
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>

    )
};

export default AdminLayout;
