import React from 'react';
import { inject } from 'mobx-react';
import { Link } from "@reach/router";
import './index.css'
const Menu = inject('auth')(({ auth }) => {
    return (
        <ul className="Menu">
            <Link to='/' className="Menu-item">
                Home
            </Link>
            {!auth.isAuth && <Link to='/signin' className="Menu-item">Sign In</Link>}
            {!auth.isAuth && <Link to='/signup' className="Menu-item">Sign Up</Link>}
            {auth.isAuth && <Link to='/signout' className="Menu-item">Sign Out</Link>}
        </ul>
    );
});
export default Menu;