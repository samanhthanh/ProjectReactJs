import React, { useState } from "react";
import productService from "../services/product.service";
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = useState({
    firstName: "",
    lastName: "",
    emailId: "",

  });
  const { id } = useParams();

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };
  function tile() {
    if (id) {
        return "Update ";
    } else {
        return "Add ";
    }
}


  const ProductRegsiter = (e) => {
    e.preventDefault();
    productService
      .saveProduct(product)
      .then((res) => {
        console.log("Product Added Sucessfully");
        setMsg("Product Added Sucessfully");
        setProduct({
          firstName: "",
          lastName: "",
          emailId: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
          <h2 className='text-center'>{tile()}</h2>
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mb-3">
                    <label>Enter firstName</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.firstName}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter lastName</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.lastName}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter emailId</label>
                    <input
                      type="text"
                      name="emailId"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.emailId}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12" >Submit</button>
                 
                  <button > <Link to={"/"} className='btn btn-danger text-center' href="" >Cancel</Link></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;