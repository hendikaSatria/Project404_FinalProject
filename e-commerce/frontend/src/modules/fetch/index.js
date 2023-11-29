import { instance } from '../axios/index';

async function getAllWarehouses() {
  try {
    const response = await instance.get('/admin/warehouse');
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

//Function for get all promo
async function getAllPromo() {
  try {
    const response = await instance.get('/promo');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

//Function for create new promo
async function createPromo(formData) {
  try {
    const response = await instance.post('/promo/create', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

export { getAllWarehouses, createPromo, getAllPromo };
