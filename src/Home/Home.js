import React from 'react';
import './home.scss';
import { Link, Outlet } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <nav>
        <ul>
            <li>
            <Link to="/register">Register</Link>
            
            </li>
            <li>
            <Link to="/login">Login</Link>
                
            </li>
        </ul>
    </nav>
    <Outlet/>

    </>
  )
}
