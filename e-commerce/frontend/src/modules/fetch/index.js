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
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Something went wrong');
  }
}

//Function for create new promo
async function createPromo(data) {
  try {
    const response = await instance.post('/promo/create', data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Something went wrong');
  }
}

export { getAllWarehouses, createPromo, getAllPromo };
