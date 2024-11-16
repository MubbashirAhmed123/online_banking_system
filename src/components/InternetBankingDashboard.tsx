import React, { useEffect, useState } from 'react'
import SideBar from './SideBar';
import UserInfo from './UserInfo';
import { UserDetailType } from '../types/userType';
import { url } from '../baseUrl';


function InternetBankingDashboard() {
  const [userData, setUserData] = useState<UserDetailType | null>(null);

  const getUserDetails=async()=>{
    const token=localStorage.getItem('token')
    const res=await fetch(`${url}/api/user`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })

    const result=await res.json()
    setUserData(result)
  }

  useEffect(()=>{
    getUserDetails()
  },[])
  return (
<div className="flex flex-col md:flex-row h-screen p-4 space-y-4 md:space-y-0 md:space-x-4 bg-gradient-to-r from-blue-500 to-indigo-500">
      <SideBar />
      {userData ? <UserInfo userData={userData} /> : <p>Loading...</p>}
    </div> 
  );
}

export default InternetBankingDashboard