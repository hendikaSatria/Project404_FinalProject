import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { fetchUserData, getProvinceList, getCityList, updateAddress } from '../api/api';

const Profile = () => {
  const { user: contextUser, token, logout } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(contextUser);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [isAddAddressModalOpen, setAddAddressModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (token) {
          const userData = await fetchUserData(token);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserDetails();
  }, [token]);

  useEffect(() => {
    const fetchProvinceList = async () => {
      try {
        const provinces = await getProvinceList();
        console.log('Fetched provinces:', provinces);
        setProvinces(provinces);
      } catch (error) {
        console.error('Error fetching province list:', error);
      }
    };

    fetchProvinceList();
  }, []);

  const fetchCityList = async (provinceId) => {
    try {
      const cities = await getCityList(provinceId);
      console.log('Fetched cities:', cities);
      setCities(cities);
    } catch (error) {
      console.error('Error fetching city list:', error);
    }
  };


  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleOpenAddAddressModal = () => {
    setAddAddressModalOpen(true);
  };

  const handleCloseAddAddressModal = () => {
    setAddAddressModalOpen(false);
  };

  const handleAddAddress = async () => {
    try {
      const selectedCityDetails = cities.find((city) => city.city_id === selectedCity);
  
      // Check if city details are available
      if (selectedCityDetails) {
        // Extract relevant details
        const {
          province_id,
          province,
          city_id,
          city_name,
          postal_code,
        } = selectedCityDetails;
  
        // Convert province_id and city_id to integers
        const parsedProvinceId = parseInt(province_id, 10);
        const parsedCityId = parseInt(city_id, 10);
        const parsedPostalCode = parseInt(postal_code, 10);

  
        // Call the updateAddress function with relevant details and token
        const response =  await updateAddress({
          province_id: parsedProvinceId,
          province_name: province,
          city_id: parsedCityId,
          city_name,
          postal_code: parsedPostalCode,
        }, token);
     
        console.log('Update Address API Response:', response);
        console.log('Address added successfully!');
      } else {
        console.error('Error: City details not found.');
      }
  
      // Close the modal after handling the address
      handleCloseAddAddressModal();
    } catch (error) {
      console.error('Error handling address:', error);
    }
  };

  console.log('User data in Profile:', user);

  return (
    <ChakraProvider>
      <Flex align="center" justify="center" h="100vh">
        <Box p="4" borderWidth="1px" borderRadius="lg" boxShadow="md">
          <Flex>
            {/* Left Side - Affiliate Code */}
            <Box mr="4">
              <Text fontWeight="bold">Affiliate Code:</Text>
              <Text>{user ? user.affiliate_code : 'N/A'}</Text>
            </Box>

            {/* Right Side - User Info */}
            <Box>
              <Text fontWeight="bold">Name:</Text>
              <Text>{user?.full_name || 'N/A'}</Text>

              <Text fontWeight="bold">Email:</Text>
              <Text>{user?.email || 'N/A'}</Text>

            {/* Displaying the Addresses */}
            <Text fontWeight="bold">Addresses:</Text>
            {user?.user_addresses?.length > 0 ? (
            user.user_addresses.map((address) => (
            <div key={address.user_address_id}>
            <Text>{`Province: ${address.province_name}, City: ${address.city_name}, Postal Code: ${address.postal_code}`}</Text>
            </div>
  ))
) : (
  <Text>N/A</Text>
)}


              <Button mt="4" onClick={handleOpenAddAddressModal}>
                Add address
              </Button>

              <Button mt="4" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>

      {/* Add Address Modal */}
      <Modal isOpen={isAddAddressModalOpen} onClose={handleCloseAddAddressModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* City Dropdown */}
            <Select
              placeholder="Select Province"
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                fetchCityList(e.target.value); // Fetch city list based on selected province
              }}
              mb="4"
            >
  
              {provinces.map((province) => (
                <option key={province.province_id} value={province.province_id}>
                  {province.province}
                </option>
              ))}
            </Select>

            <Select
              placeholder="Select City"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              mb="4"
            >
  
              {cities.map((city) => (
                <option key={city.city_id} value={city.city_id}>
                  {city.city_name}
                </option>
              ))}
            </Select>


            {/* Add Address Button */}
            <Button colorScheme="teal" onClick={handleAddAddress}>
              Add Address
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseAddAddressModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default Profile;
