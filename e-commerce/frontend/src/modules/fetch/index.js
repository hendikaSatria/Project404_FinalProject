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
async function createWarehouse(data) {
  try {
    console.log(data);
    // const response = await instance.post("/admin/warehouse", data);
    // return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

async function getWarehouseById(id) {
  try {
    const response = await instance.get(`/admin/warehouse/${id}`);
    return response.data;
    console.log(response.data);
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

export { getAllWarehouses, createWarehouse, getWarehouseById };
