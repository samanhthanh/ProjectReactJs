import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import productService from "../services/product.service";

const EditProduct = () => {
  const [product, setProduct] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };
  const canCel =(e)=>{
    navigate("/");
  }
  const ProductUpdate = (e) => {
    e.preventDefault();
    productService
      .editProduct(product)
      .then((res) => {
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
            <div className="card">
              <div className="card-header fs-3 text-center">Edit Product</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductUpdate(e)}>
                  <div className="mb-3">
                    <label>Enter Product Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.firstName}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.lastName}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Price</label>
                    <input
                      type="text"
                      name="emailId"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.emailId}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Update</button>
                  <button className='btn btn-secondary text-center m-1'  onClick={canCel} >Cancel</button>
                  {/* <Link to={"/"} className='btn btn-secondary text-center' href="" >Cancel</Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;