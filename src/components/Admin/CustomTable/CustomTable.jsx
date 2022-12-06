
import { Pagination, Table } from 'antd'

const CustomTable = (props) => {
    const { total, handlechangePagination, columns, dataSource, defaultPage, loading } = props

    return <>
        <Table columns={columns} dataSource={dataSource} total={total} defaultPage={defaultPage} loading={loading} />
    </>


}
export default CustomTable;