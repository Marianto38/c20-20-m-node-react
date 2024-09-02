import axios from 'axios';

// const URL_GET_USERS = import.meta.env.VITE_API_GET_USERS
const URL_GET_USERS ="http://localhost:3000/api/users";

export const getAllUsers = async () => {
    try {
  
      const options = {
        headers: {

        },
      };
  
      const response = await axios.get(URL_GET_USERS, options);
  
      return response;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };