import React, { useState } from 'react';
import { AiFillBackward } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { url } from '../baseUrl';

const SeeBalance = () => {
  const [securityPin, setSecurityPin] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    setLoading(true);
    try {
      const res = await fetch(`${url}/api/user/getBalance`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ securityPin }),
      });
      setSecurityPin('')

      const result = await res.json();
      setLoading(false)

      if (res.ok) {
        toast.success(`Your Balance: ${result.balance}`);

      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error('An error occurred');
    } 
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <h1 className='fixed top-20 left-5 flex items-center gap-2 cursor-pointer' onClick={()=>navigate(-1)}> <AiFillBackward/> back</h1>
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-[#002244] mb-4">See Balance</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="securityPin" className="block text-sm font-medium text-gray-700">
              Security PIN
            </label>
            <input
              type="password"
              id="securityPin"
              value={securityPin}
              onChange={(e) => setSecurityPin(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition ${
                loading ? 'cursor-not-allowed opacity-75' : ''
              }`}
            >
              {loading ? (
                <FaSpinner className="animate-spin mr-2" />
              ) : (
                'Check Balance'
              )}
            </button>
          </div>
        </form>
      </div>
    </div></>
  );
};

export default SeeBalance;
