import React from 'react'
import {  FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';
import { UserDetailType } from '../types/userType';


function UserInfo({userData}:{userData:UserDetailType}) {
  return (
    <div className="w-full md:w-3/4 p-6 bg-gray-50 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-6">User Information</h2>
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaUser className="text-gray-600" />
        <p><strong>Name:</strong> {userData.userName}</p>
      </div>
      <div className="flex items-center space-x-2">
        <FaPhone className="text-gray-600" />
        <p><strong>Phone:</strong>{userData.phoneNumber}</p>
      </div>
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-gray-600" />
        <p><strong>Email:</strong> {userData.email}</p>
      </div>
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-gray-600" />
        <p><strong>Address:</strong>{userData.address}</p>
      </div>
      <div className="flex items-center space-x-2">
        <FaCreditCard className="text-gray-600" />
        <p><strong>Account Number:</strong> {userData.bankAccountNumber}</p>
      </div>
    </div>
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-2">Internet Banking Facilities</h3>
      <p>
        Our internet banking system provides secure and easy access to your account balance, transfers, deposits, and more.
        Activate internet banking to enjoy seamless banking right from your device.
      </p>
    </div>
  </div>)
}

export default UserInfo