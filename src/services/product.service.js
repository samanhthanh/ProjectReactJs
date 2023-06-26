import axios from 'axios';

const API_URL = "http://localhost:8080/employee"; 

class ProductService {

    saveProduct(product) {
        return axios.post(API_URL + "/save", product);
    }

    getAllProduct() {
        return axios.get(API_URL + "/getList");
    }
    deleteProduct(id) {
        return axios.delete(API_URL + "/delete/" + id);
    }



}

export default new ProductService;