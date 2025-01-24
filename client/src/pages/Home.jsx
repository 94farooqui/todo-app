import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Outlet } from 'react-router-dom';
import UserLandingPage from './UserLandingPage';
import LandingPage from './LandingPage';

const Home = () => {
  const { user, authLoading } = useContext(AuthContext);

  useEffect(()=>{
    
  },[])
    if (authLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="w-[1200px] mx-auto py-12">
        {user ? <UserLandingPage /> : <LandingPage />}
      </div>
    );
}

export default Home