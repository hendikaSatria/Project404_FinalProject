import { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Stack,
  Alert,
  AlertIcon,
  Spinner,
  Heading,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/admin/login', credentials);
      const { token } = response.data;

      setError(null);

      // Simpan token di localStorage
      localStorage.setItem('Token', token);

      // Set header Authorization untuk permintaan selanjutnya
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Navigasi ke halaman home setelah login berhasil
      navigate('/order');
    } catch (error) {
      setError('Login gagal. Cek kembali username dan password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box d="flex" h="100vh" alignItems="center" justifyContent="center" color = "black">
      <Box
        p={4}
        maxW="350px"
        bg="white"
        shadow="md"
        rounded="lg"
        textAlign="center"
      >
        <Heading mb={6}>Welcome back!</Heading>
        <Box fontSize="md" color="gray.600" mb={6}>
          Let's start manage Vislap's website!
        </Box>
        <Box>
          <Stack spacing={4}>
            <Input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Username"
              size="lg"
            />

            <Input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Password"
              size="lg"
            />

            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}

            <Button
              colorScheme="blue"
              onClick={handleLogin}
              isLoading={isLoading}
              disabled={isLoading}
              size="lg"
            >
              {isLoading ? <Spinner /> : 'Login'}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLogin;
