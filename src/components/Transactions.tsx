import React, { useEffect, useState } from 'react';
import { AiFillBackward } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { url } from '../baseUrl';

interface Credit {
  amount: number;
  destinationAccount: string | null;
  date: string;
}

interface Debit {
  amount: number;
  destinationAccount: string;
  date: string;
}

interface Transaction {
  _id: string;
  user: string;
  credit: Credit[];
  debit: Debit[];
}

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const navigate=useNavigate()

  const getTransactions = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${url}/api/user/transactions`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      setTransactions(result);
    } catch (error) {
      alert('An error occurred while fetching transactions.');
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="p-5 md:p-10 bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#002244]">
        Transaction History
      </h1>
      <h1 className='fixed top-20 left-5 flex items-center gap-2 cursor-pointer' onClick={()=>navigate(-1)}> <AiFillBackward/>back</h1>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <div
            key={transaction._id}
            className="flex flex-col md:flex-row gap-5 md:gap-10 p-5 md:p-8 rounded-lg shadow-md bg-white mb-10"
          >
            <div className="bg-red-100 p-5 flex-1 rounded-lg shadow-inner">
              <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
                Debits
              </h2>
              {transaction.debit.length > 0 ? (
                transaction.debit.map((debit, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-gray-800">
                      <span className="font-semibold">Debited Amount:</span> $
                      {debit.amount}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-semibold">Sent To:</span>{' '}
                      {debit.destinationAccount}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-semibold">Date:</span>{' '}
                      {new Date(debit.date).toLocaleString()}
                    </p>
                    <hr className="my-2 border-red-200" />
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No debit transactions</p>
              )}
            </div>

            <div className="bg-green-100 p-5 flex-1 rounded-lg shadow-inner">
              <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
                Credits
              </h2>
              {transaction.credit.length > 0 ? (
                transaction.credit.map((credit, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-gray-800">
                      <span className="font-semibold">Credited Amount:</span> $
                      {credit.amount}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-semibold">Received From:</span>{' '}
                      {credit.destinationAccount ?? 'Self'}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-semibold">Date:</span>{' '}
                      {new Date(credit.date).toLocaleString()}
                    </p>
                    <hr className="my-2 border-green-200" />
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No credit transactions</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600 text-lg">
          No transactions found.
        </p>
      )}
    </div>
  );
};

export default Transactions;
