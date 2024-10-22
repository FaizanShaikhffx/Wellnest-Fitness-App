import React from 'react'
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  
   const { loginWithRedirect } = useAuth0();
   const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

  
  return (
 <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src="Logo.png" alt="logo" className='Navbar-image' />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
{       !isAuthenticated  ?     (<a  onClick={() => loginWithRedirect()}  href="" style={{ textDecoration: 'none', color: '#3A1212' }}>Login</a>) : (<a  onClick={() => logout()}  href="" style={{ textDecoration: 'none', color: '#3A1212' }}>Logout</a> ) }


 {isAuthenticated && (
      <div className='flex  gap-4 '>
      


      
        <img className='w-10 h-10 rounded-full' src={user.picture} alt={user.name} />
        <p>  {user.name} </p>
      </div>

)}
    </Stack>
  </Stack>
  )
}

export default Navbar
