import { useForm } from 'react-hook-form';
import { User } from '../types/userType';
import { sendData } from '../utils/api';
import { url } from '../baseUrl';

function CreateUser() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<User>();

  const onSubmit = async (data: User) => {
    await sendData(`${url}/api/user/createAcc`, data, reset); 
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Create New Account</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl md:grid md:grid-cols-2 items-center gap-6">
        
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="userName"
            {...register('userName', { required: 'Name is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter your full name"
          />
          {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            {...register('phoneNumber', { required: 'Phone number is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter your 10 digit phone number"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Country */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country</label>
          <input
            type="text"
            id="country"
            value="India"
            readOnly
            className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none"
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 font-bold mb-2">State</label>
          <input
            type="text"
            id="state"
            {...register('state', { required: 'State is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter your state name"
          />
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
        </div>

        {/* Address */}
        <div className="mb-4 col-span-2">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
          <textarea
            id="address"
            {...register('address', { required: 'Address is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter your address"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
        </div>

        {/* Pin Code */}
        <div className="mb-4">
          <label htmlFor="pinCode" className="block text-gray-700 font-bold mb-2">Pin Code</label>
          <input
            type="number"
            id="pinCode"
            {...register('pinCode', { required: 'Pin code is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter your pin code"
          />
          {errors.pinCode && <p className="text-red-500 text-sm mt-1">{errors.pinCode.message}</p>}
        </div>

        {/* Account Type */}
        <div className="mb-4">
          <label htmlFor="accountType" className="block text-gray-700 font-bold mb-2">Account Type</label>
          <select
            id="accountType"
            {...register('accountType')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          >
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
          </select>
        </div>

        {/* Initial Deposit */}
        <div className="mb-6">
          <label htmlFor="initialDeposit" className="block text-gray-700 font-bold mb-2">Initial Deposit</label>
          <input
            type="number"
            id="initialDeposit"
            {...register('initialDeposit', { required: 'Initial deposit is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter initial deposit"
          />
          {errors.initialDeposit && <p className="text-red-500 text-sm mt-1">{errors.initialDeposit.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center col-span-2">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
