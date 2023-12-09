import React, { useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Input,
  useToast,
  Link,
  Text, // Tambahkan Text dari Chakra UI
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddProduct = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    is_available: '',
    category_name: '',
    warehouse_name: '',
    weight: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleTambahProduk = async () => {
    try {
      const {
        name,
        description,
        price,
        stock,
        is_available,
        category_name,
        warehouse_name,
        weight,
        image,
      } = formData;

      const formDataToSend = new FormData();
      formDataToSend.append('name', name);
      formDataToSend.append('description', description);
      formDataToSend.append('price', price);
      formDataToSend.append('stock', stock);
      formDataToSend.append('is_available', is_available);
      formDataToSend.append('category_name', category_name);
      formDataToSend.append('warehouse_name', warehouse_name);
      formDataToSend.append('weight', weight);
      formDataToSend.append('image', image);

      const response = await axios.post('http://localhost:3000/product', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Setelah berhasil menambahkan, tampilkan Toast sukses dan arahkan ke halaman produk
      toast({
        title: 'Produk berhasil ditambahkan',
        status: 'success',
        isClosable: true,
      });

      navigate('/admin/product');
    } catch (error) {
      console.error('Error tambah produk:', error);

      // Jika terjadi kesalahan, tampilkan Toast error
      toast({
        title: 'Gagal menambahkan produk',
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
        <Heading mb={4}>Tambah Produk</Heading>
        <Link to="/admin/product">
          <Button colorScheme="blue">Kembali ke Produk</Button>
        </Link>
      </Box>

      <form encType="multipart/form-data">
        <Text mb={2}>
          Mohon isi formulir di bawah untuk menambahkan produk baru. Pastikan data yang Anda
          masukkan akurat dan lengkap.
        </Text>
        <Input
          type="text"
          name="name"
          placeholder="Nama Produk"
          value={formData.name}
          onChange={handleInputChange}
          mb={3}
        />
        <Input
          type="text"
          name="description"
          placeholder="Deskripsi"
          value={formData.description}
          onChange={handleInputChange}
          mb={3}
        />
        <Input
          type="text"
          name="price"
          placeholder="Harga"
          value={formData.price}
          onChange={handleInputChange}
          mb={3}
        />
        <Input
          type="number"
          name="stock"
          placeholder="Stok"
          value={formData.stock}
          onChange={handleInputChange}
          mb={3}
        />
        <Input
          type="text"
          name="is_available"
          placeholder="Tersedia (true/false)"
          value={formData.is_available}
          onChange={handleInputChange}
          mb={3}
        />
        <Input
          type="text"
          name="category_name"
          placeholder="Nama Kategori"
          value={formData.category_name}
          onChange={handleInputChange}
          mb={3}
        />
        <Input
          type="text"
          name="warehouse_name"
          placeholder="Nama Gudang"
          value={formData.warehouse_name}
          onChange={handleInputChange}
          mb={3}
        />
        <Input
          type="number"
          name="weight"
          placeholder="Berat"
          value={formData.weight}
          onChange={handleInputChange}
          mb={3}
        />
        <Text mb={2}>
          Pilih gambar produk yang akan diunggah
        </Text>
        <Input type="file" name="image" onChange={handleImageChange} mb={3} />
        <Button colorScheme="green" mt={4} onClick={handleTambahProduk}>
          Simpan Produk
        </Button>
      </form>
    </Box>
  );
};

export default FormAddProduct;
