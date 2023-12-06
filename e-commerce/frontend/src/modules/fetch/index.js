import { instance } from "../axios/index";

async function getAllWarehouses() {
  try {
    const response = await instance.get("/admin/warehouse");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

//Function for get all promo
async function getAllPromo() {
  try {
    const response = await instance.get("/promo");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || "Something went wrong");
  }
}

//Function for get promo by Id
async function getPromoById(id) {
  try {
    const response = await instance.get(`/promo/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

//Function for create new promo
async function createPromo(data) {
  try {
    const response = await instance.post("/promo/create", data);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || "Something went wrong");
  }
}

//Function for edit promo
async function editPromo(id, data) {
  try {
    const response = await instance.put(`/promo/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}
//Function for delete promo
async function deletePromo(id) {
  try {
    const response = await instance.delete(`/promo/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

export { getAllWarehouses, createPromo, getAllPromo, getPromoById, editPromo, deletePromo };
