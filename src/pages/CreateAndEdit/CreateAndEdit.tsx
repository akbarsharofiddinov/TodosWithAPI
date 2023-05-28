import React, { useState } from "react";
import classes from "./CreateAndEdit.module.scss";
import { MyFormTodo, MyFormProduct } from "@components/index";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { useParams } from "react-router-dom";

const CreateAndEdit: React.FC = () => {
  const { id } = useParams();

  const [value, setValue] = useState("Todo");

  React.useEffect(() => {
    if (id) {
      setValue("Product");
    }
  }, [id]);

  const plainOptions = ["Todo", "Product"];

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio1 checked", value);
    setValue(value);
  };

  return (
    <section className="section-app">
      <div className="container">
        <Radio.Group
          options={plainOptions}
          onChange={onChange1}
          value={value}
        />
        <div className={classes.inner}>
          <div className={classes.box}>
            <h1 style={{ textAlign: "start" }}>
              {value === "Todo" ? "Add Todo" : "Add Product"}
            </h1>
            {value === "Todo" ? <MyFormTodo /> : <MyFormProduct />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAndEdit;
