import AxiosBase from "./AxiosBase";

const token = localStorage.getItem("token");
console.log(token);

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const tokenConfig = {
  headers: {
    "Content-Type": "application/json",
    token: `${token}`,
  },
};
export const postLogin = (email, password) =>
  AxiosBase.post(`/admin/login`, { email, password }, config);
export const getUsers = () => AxiosBase.get("/admin/users", tokenConfig);
export const getSellers = () => AxiosBase.get("/admin/sellers", tokenConfig);
export const getPendingSellers = () =>
  AxiosBase.get("/admin/sellers/pending", tokenConfig);
export const delUser = (id) =>
  AxiosBase.delete(`/admin/users/${id}`, tokenConfig);
export const sellerapprove = (id) =>
  AxiosBase.patch(`/admin/sellers/${id}`, { action: "approve" }, tokenConfig);
export const sellerdisapprove = (id) =>
  AxiosBase.patch(`/admin/sellers/${id}`, tokenConfig);
export const delSeller = (id) =>
  AxiosBase.delete(`/admin/sellers/${id}`, tokenConfig);
export const totalUsers = () =>
  AxiosBase.get(`/admin/getUsersCount`, tokenConfig);
export const totalProducts = () =>
  AxiosBase.get(`/admin/getProductsCount`, tokenConfig);
