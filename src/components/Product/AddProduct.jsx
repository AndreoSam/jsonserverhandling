import React, { useState } from "react";
import axios from "axios";
import { base_url, prod_url } from "../../api/api_url";
import "./AddProduct.css";

const AddProduct = () => {
  let api_url = base_url + prod_url;
  let [data, setData] = useState({
    product_name: "",
    color: "",
    description: "",
    price: "",
    version: "",
    errors: {
      product_name: "",
      color: "",
      description: "",
      price: "",
      version: "",
    },
  });

  let changeHandler = (event) => {
    let { name, value } = event.target;
    let err = data.errors;
    setData({ ...data, [name]: value, errors: err });
    console.log("Validation error", data.errors);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted Value: ", data);
    let prod = {
      product_name: data.name,
      price: data.price,
      version: data.ver,
      description: data.desc,
      color: data.color,
    };
    axios
      .post(api_url, prod)
      .then((res) => {
        console.log("Axios Response: ", res);
        alert("Product added...!")
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="form_element">
        <h1>PRODUCT</h1>
        <br />
        <label>
          <b>Product Name: </b>
        </label>

        <input type="text" name="name" onChange={changeHandler} />
        <br />
        <label>
          <b>Product Price: </b>
        </label>

        <input type="text" name="price" onChange={changeHandler} />
        <br />
        <label>
          <b>Product Version: </b>
        </label>

        <input type="text" name="ver" onChange={changeHandler} />
        <br />
        <label>
          <b>Product Description: </b>
        </label>

        <input type="text" name="desc" onChange={changeHandler} />
        <br />
        <label>
          <b>Product Color: </b>
        </label>

        <select name="color" onChange={changeHandler}>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
        </select>
        <br />
        <input className="submit" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
