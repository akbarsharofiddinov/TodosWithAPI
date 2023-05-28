import React from "react";
import { Form, Input, Button } from "antd";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useEditTodoMutation,
} from "@store/apiRTK/apiRTK";
import { useNavigate, useParams } from "react-router-dom";

const MyFormTodo: React.FC = () => {
  const [form] = Form.useForm();
  const [todo, setTodo] = React.useState<ITodo | undefined>(undefined);
  const { id } = useParams();
  const { data } = useGetTodosQuery();

  const [addUser] = useAddTodoMutation();
  const [editUser] = useEditTodoMutation();
  const navigate = useNavigate();

  const onFinish = (values: Omit<ITodo, "id">) => {
    if (id) {
      const todoID = parseInt(id);
      editUser({ id: todoID, ...values });
      navigate("/todos");
    } else {
      addUser(values).unwrap();
      navigate("/todos");
    }
  };

  React.useEffect(() => {
    if (id) {
      const findTodo = data?.find((item) => item.id === parseInt(id));
      setTodo(findTodo);

      form.setFieldsValue({
        title: todo?.title ?? "",
        desc: todo?.desc ?? "",
      });
    }
  }, [id, todo, form]);

  return (
    <Form
      form={form}
      name="basic"
      style={{ maxWidth: 700, width: "100%" }}
      onFinish={onFinish}
      autoComplete="off"
      initialValues={todo}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="desc"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {id ? "Edit" : "Submit"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyFormTodo;
