import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Outlet } from 'react-router-dom';
import UserLandingPage from './UserLandingPage';
import LandingPage from './LandingPage';

const Home = () => {
  const { user, token, authLoading } = useContext(AuthContext);

  useEffect(()=>{
    // console.log(user, token)
  },[])
    if (authLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="">
        {user ? <UserLandingPage /> : <LandingPage />}
      </div>
    );
}

export default Home