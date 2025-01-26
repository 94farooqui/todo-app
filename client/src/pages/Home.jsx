import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext';
import UserLandingPage from './UserLandingPage';
import LandingPage from './LandingPage';

const Home = () => {
  const { user, token, authLoading } = useContext(AuthContext);

  useEffect(()=>{
    
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