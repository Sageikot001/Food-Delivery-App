import React from 'react';


const Nav = () => {
    return (
        <div className='Nav'>
        <div className='grp1'>
        <img src='./Data/Pizza.svg' alt='#'/>
        <ul>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Page <img src='./Data/VectorD.svg' /></a></li>
        </ul>
        </div>
        <div className='optin'>
            <button className='btn1'>Login</button>
            <button className='btn2'>Sign Up</button>
        </div>
    </div>
  )
}

export default Nav