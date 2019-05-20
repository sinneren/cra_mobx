import React from 'react';
import { inject } from 'mobx-react';
import { Link } from "@reach/router";
import './index.css'
const Menu = inject('authState')(({ authState }) => {
    return (
        <ul className="Menu">
            <Link to='/' className="Menu-item">
                Home
            </Link>
            {!authState.isAuth && <Link to='/signin' className="Menu-item">Sign In</Link>}
            {!authState.isAuth && <Link to='/signup' className="Menu-item">Sign Up</Link>}
            {authState.isAuth && <Link to='/signout' className="Menu-item">Sign Out</Link>}
        </ul>
    );
});
export default Menu;