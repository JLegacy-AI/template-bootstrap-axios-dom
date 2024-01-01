import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const apis = {
  getLimitedProducts: (limit) => {
    return axios.get(`${BASE_URL}/products?limit=${limit}`);
  },
  getProducts: () => {
    return axios.get(`${BASE_URL}/products`);
  },
  getProduct: (id) => {
    return axios.get(`${BASE_URL}/products/${id}`);
  },
  getCategories: () => {
    return axios.get(`${BASE_URL}/products/categories`);
  },
  getCategory: (category) => {
    return axios.get(`${BASE_URL}/categories/${category}`);
  },
  addNewProduct: (product) => {
    return axios.post(`${BASE_URL}/products`, {
      ...product,
    });
  },
  updateProduct: (product) => {
    const { id, ...otherProps } = product;
    return axios.put(`${BASE_URL}/products/${id}`, {
      ...otherProps,
    });
  },

  deleteProduct: (id) => {
    return axios.delete(`${BASE_URL}/products/${id}`);
  },

  addNewUser: (user) => {
    return axios.post(`${BASE_URL}/users`, {
      ...user,
    });
  },
  getUsers: (asc = true) => {
    return axios.get(`${BASE_URL}/users${asc ? "" : "?sort=desc"}`);
  },
  getSingleUser: (id) => {
    return axios.get(`${BASE_URL}/users/${id}`);
  },
  getLimitedUser: (limit) => {
    return axios.get(`${BASE_URL}/users?limit=${limit}`);
  },
  updateUser: (user) => {
    const { id, ...otherProps } = user;
    return axios.put(`${BASE_URL}/users/${id}`, {
      ...otherProps,
    });
  },
  deleteUser: (id) => {
    return axios.delete(`${BASE_URL}/users/${id}`);
  },
  userLogin: (user) => {
    return axios.post(`${BASE_URL}/auth/login`, {
      ...user,
    });
  },
  addToCarts: (userId, date, cartProducts) => {
    return axios.post(`${BASE_URL}/carts`, {
      userId,
      date,
      products: cartProducts,
    });
  },
  getUserCartProducts: (userID) => {
    return axios.get(`${BASE_URL}/carts/${userID}`);
  },
  updateCartProducts: (userId, cartId, date, cartProduct) => {
    return axios.put(`${BASE_URL}/carts/${cartId}`, {
      userId,
      date,
      products: cartProduct,
    });
  },
  deleteCart: (cartId) => {
    return axios.delete(`${BASE_URL}/carts/${cartId}`);
  },
};
