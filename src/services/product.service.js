import axios from 'axios';

const API_URL = "http://localhost:8080/employee";

class ProductService {

    saveProduct(product) {
        return axios.post(API_URL + "/save", product);
    }
    editProduct(product) {
        return axios.post(API_URL + "/edit/" + product.id, product);
    }

    getAllProduct() {
        return axios.get(API_URL + "/getList");
    }
    getProductById(id) {
        return axios.get(API_URL + "/" + id);
    }
    deleteProduct(id) {
        return axios.delete(API_URL + "/delete/" + id);
    }



}

export default new ProductService;