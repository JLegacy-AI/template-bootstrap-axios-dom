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
    return axios.get(`${BASE_URL}/categories`);
  },
  getCategory: (id) => {
    return axios.get(`${BASE_URL}/categories/${id}`);
  },
  getProductsByCategory: (id) => {
    return axios.get(`${BASE_URL}/categories/${id}/products`);
  },
  getCart: () => {
    return axios.get(`${BASE_URL}/cart`);
  },
  addToCart: (id) => {
    return axios.post(`${BASE_URL}/cart`, { id });
  },
  removeFromCart: (id) => {
    return axios.delete(`${BASE_URL}/cart/${id}`);
  },
  updateCart: (id, quantity) => {
    return axios.put(`${BASE_URL}/cart/${id}`, { quantity });
  },
  getWishlist: () => {
    return axios.get(`${BASE_URL}/wishlist`);
  },
  addToWishlist: (id) => {
    return axios.post(`${BASE_URL}/wishlist`, { id });
  },
  removeFromWishlist: (id) => {
    return axios.delete(`${BASE_URL}/wishlist/${id}`);
  },
  getOrders: () => {
    return axios.get(`${BASE_URL}/orders`);
  },
  createOrder: (data) => {
    return axios.post(`${BASE_URL}/orders`, data);
  },
  getOrder: (id) => {
    return axios.get(`${BASE_URL}/orders/${id}`);
  },
  getOrdersByUser: () => {
    return axios.get(`${BASE_URL}/users/orders`);
  },
  getOrdersByUserAndStatus: (status) => {
    return axios.get(`${BASE_URL}/users/orders?status=${status}`);
  },
  cancelOrder: (id) => {
    return axios.put(`${BASE_URL}/orders/${id}/cancel`);
  },
  payOrder: (id) => {
    return axios.put(`${BASE_URL}/orders/${id}/pay`);
  },
  deliverOrder: (id) => {
    return axios.put(`${BASE_URL}/orders/${id}/deliver`);
  },
};
