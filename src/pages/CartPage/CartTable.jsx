
import { Table } from "antd"
import ListProductInCart from "../../components/Cart/ListProductInCart"
const CartTable = (props) => {
    const { data, columns } = props
    return <Table
        pagination={false}
        style={{
            margin: "3rem",
            overflow:"scroll"
        }}
        columns={columns}
        dataSource={data}
    />
}
export default CartTable