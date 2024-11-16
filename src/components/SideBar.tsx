import { Link } from 'react-router-dom'
import {  FaMoneyCheck, FaExchangeAlt, FaLock, FaHistory, FaKey } from 'react-icons/fa';

function SideBar() {
  
    
      return (
        <div className="w-full md:w-1/4 bg-gray-200/90 p-4 rounded-xl shadow-md ">
        <h2 className="text-xl font-bold text-gray-800 mb-6">IB Bank</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="activate" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                <FaLock />
                <span>Activate Internet Banking</span>
              </Link>
            </li>
            <li>
              <Link to="seebalance" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                <FaMoneyCheck />
                <span>See Balance</span>
              </Link>
            </li>
            <li>
              <Link to="transfer" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                <FaExchangeAlt />
                <span>Transfer Amount</span>
              </Link>
            </li>
            <li>
              <Link to="deposit" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                <FaMoneyCheck />
                <span>Deposit Amount</span>
              </Link>
            </li>
            <li>
              <Link to="transactions" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                <FaHistory />
                <span>Transaction History</span>
              </Link>
            </li>
            <li>
              <Link to="change_pin" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                <FaKey/>
                <span>Change Security Pin</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      );
    }
    


export default SideBar