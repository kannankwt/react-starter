import { Button } from '@mantine/core';
import React from 'react'
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const logout = useSignOut();
  const navigate = useNavigate();

  return (
    <div>
      Home Page
      <Button color='blue' onClick={()=>{
        logout();
        navigate('/login');
      }}>Logout</Button>
    </div>
  )
}

export default Home
