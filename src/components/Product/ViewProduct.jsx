import React, { useState, useEffect } from "react";
import axios from "axios";
import { base_url, prod_url } from "../../api/api_url";
import { Container } from "react-bootstrap";
import "./ViewProduct.css";

const ViewProduct = () => {
  // const api_url = "http://localhost:1000/product";

  let api_url = base_url + prod_url;
  let [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        console.log("Axios Recieved: ", res);
        setState(res.data);
      })
      .catch((err) => console.log("Axios Error: ", err));
  }, [setState, api_url]);

  return (
    <Container>
      {state.map((prod) => (
        <div key={prod.id}>
          <hr />
          <div className="container_main">
            <b>Product Name:</b> {prod.product_name}
            <br />
            <b>Description:</b> {prod.description}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ViewProduct;
