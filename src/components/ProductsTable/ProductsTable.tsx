import React from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "@store/apiRTK/apiRTK";
import { Link } from "react-router-dom";

const ProductsTable: React.FC = () => {
  const { data, isError, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  interface DataType {
    id: React.Key;
    model: string;
    price: number;
    color: string;
  }

  const dataSource: DataType[] | undefined = data?.map((item) => ({
    key: item.id,
    ...item,
  }));

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/editProduct/${record.id}`} >
            <Button>Edit</Button>
          </Link>
          <Button onClick={() => deleteProduct(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isError ? (
    <h1>Error</h1>
  ) : data ? (
    <Table columns={columns} dataSource={dataSource} />
  ) : (
    <h1>No Data</h1>
  );
};

export default ProductsTable;
