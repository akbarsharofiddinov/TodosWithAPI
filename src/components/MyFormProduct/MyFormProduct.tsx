import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import {
  useAddProductMutation,
  useEditProductMutation,
  useGetProductQuery,
} from "@store/apiRTK/apiRTK";
import { useNavigate, useParams } from "react-router-dom";

const MyFormProduct: React.FC = () => {
  const [addProduct] = useAddProductMutation();
  const [editProduct] = useEditProductMutation();
  const navigate = useNavigate();

  const { id } = useParams();

  const { data: dataProduct } = useGetProductQuery(id!);

  const onFinish = (values: Omit<IProduct, "id">) => {
    if (id) {
      const editID = parseInt(id);
      editProduct({ id: editID, ...values });
      navigate("/products")
    } else {
      addProduct(values);
      navigate("/products");
    }
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue({
      model: dataProduct?.model ?? "",
      price: dataProduct?.price ?? 0,
      color: dataProduct?.color ?? "",
    });
  }, [id, form, dataProduct]);

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      autoComplete="off"
      form={form}
      initialValues={{
        model: dataProduct?.model,
        color: dataProduct?.color,
        price: dataProduct?.price,
      }}
    >
      <Form.Item
        label="Model"
        name="model"
        rules={[{ required: true, message: "Please input your model!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input your price!" }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Price"
        name="color"
        rules={[{ required: true, message: "Please input your color!" }]}
      >
        <Select
          defaultValue="Choose the color"
          style={{ width: 170 }}
          onChange={handleChange}
          options={[
            { value: "black", label: "Black" },
            { value: "white", label: "White" },
            { value: "red", label: "Red" },
            { value: "green", label: "Green" },
          ]}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyFormProduct;
