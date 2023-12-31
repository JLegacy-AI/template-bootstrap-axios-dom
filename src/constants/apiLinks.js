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
};
