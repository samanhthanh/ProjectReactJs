import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../services/product.service";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
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
    return (

        <div>
            <div><h1 style={{color:"GrayText"}}>PRODUCT DETAIL</h1></div>
            <div className="text-center">
                <div>
                    <strong>FirstName:</strong>
                    <i className="text-danger ms-1">{product.firstName}</i>
                </div>
                <div>
                    <strong>FirstName:</strong>
                    <i className="text-warning ms-1">{product.lastName}</i>
                </div>
                <div>
                    <strong>FirstName:</strong>
                    <i className="text-info ms-1">{product.emailId}</i>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail
