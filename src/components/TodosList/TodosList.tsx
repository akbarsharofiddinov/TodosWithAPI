import React from "react";
import { useGetTodosQuery } from "@store/apiRTK/apiRTK";
import { List, Button } from "antd";
import { useDeleteTodoMutation } from "@store/apiRTK/apiRTK";
import { Link } from "react-router-dom";

const TodosList: React.FC = () => {
  const { data } = useGetTodosQuery();

  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Link
              to={`/edit/${item.id}`}
              style={{
                marginRight: 20,
                textDecoration: "underline",
              }}
            >
              Edit
            </Link>,
            <Button
              type="primary"
              style={{ backgroundColor: "crimson" }}
              key="list-loadmore-more"
              onClick={() => {
                deleteTodo(item.id);
              }}
            >
              delete
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
            description={<p>{item.desc}</p>}
          />
        </List.Item>
      )}
    />
  );
};

export default TodosList;
