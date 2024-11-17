// src/api/userApi.ts
import { NavigateFunction } from 'react-router-dom';
import { User } from '../types/userType';
import { toast } from 'react-toastify';
import emailjs from "@emailjs/browser";



type Data = User ;

const sendEmail = async (data: any): Promise<boolean> => {
  const templateParams = {
    userName: data.userName,
    email: data.email,
    accountNumber: data.accountNumber,
    securityPin: data.securityPinToSend,
  };


  const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_ID;


  if (!emailServiceId || !publicKey) {
    console.error("Missing EmailJS configuration in environment variables.");
    return false;
  }

  try {
    await emailjs.send(emailServiceId, 'template_y0d1ps2', templateParams, publicKey);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export const sendData = async (
  url: string,
  data: Data,
  reset: () => void,
  navigate?: NavigateFunction
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
      localStorage.setItem('token', result.token);

      if (navigate) {
        navigate('/internet-banking'); 
      }
    }

    const isEmailSent = await sendEmail(result.data);

    if (isEmailSent) {
      toast.success(
        `${result.message} Information has been sent to your email.`
      );
    } else {
      toast.warning(
        `${result.message} However, we couldn't send the email.`
      );
    }

    reset();
  } catch (error) {
    toast.error('Some error occurred.');
  }
};
