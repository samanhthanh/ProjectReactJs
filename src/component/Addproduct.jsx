import React, { useState } from "react";
import productService from "../services/product.service";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [product, setProduct] = useState({
    firstName: "",
    lastName: "",
    emailId: "",

  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
const onSubmit = data => console.log(data);
  const navigate = useNavigate();
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
  const canCel = () => {
    navigate("/");
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
        navigate("/");
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
                <form onSubmit={(e) => handleSubmit(ProductRegsiter(e))}>
                  <div className="mb-3">
                    <label>Enter firstName</label>
                    <input 
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Enter first name"
                      ref={register("firstName", {
                        required: true
      
                      })}
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
                      placeholder="Enter last name"
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
                      placeholder="Enter your email"
                      onChange={(e) => handleChange(e)}
                      value={product.emailId}
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" >Submit</button>
                    <button className='btn btn-secondary m-1' onClick={canCel} >Cancel</button>
                    {/* <Link to={"/"} className='btn btn-secondary text-center' href="" >Cancel</Link> */}
                  </div>
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