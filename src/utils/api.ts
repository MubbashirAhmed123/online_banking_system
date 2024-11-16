// src/api/userApi.ts
import { NavigateFunction } from 'react-router-dom';
import { User, LoginFormData, ActivateInternetBanking } from '../types/userType';
import { toast } from 'react-toastify';

type Data = User | LoginFormData | ActivateInternetBanking;

export const sendData = async (
  url: string,
  data: Data,
  reset: () => void,
  navigate?: NavigateFunction // Make navigate optional
) => {
  try {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message || 'Some error occurred..');
      return;
    }

    const result = await response.json();
    
    if (result.token) {
      localStorage.setItem('token', result.token); // Store just the token, without 'Bearer'
      // Check if navigate is provided before calling it
      if (navigate) {
        navigate('/internet-banking'); // Redirect to internet banking dashboard
      }
    }
    
    toast.success(result.message || 'User account created successfully!');
    reset(); 
  } catch (error) {
    toast.error('Some error occurred..');
  }
};
