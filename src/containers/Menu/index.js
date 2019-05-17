import React from 'react';
import { inject } from 'mobx-react';
import { Link } from "@reach/router";

const Menu = inject('auth')(({ auth }) => {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    Home
                </Link>
                {!auth.isAuth && <Link to='/signin'>Sign In</Link>}
                {!auth.isAuth && <Link to='/signup'>Sign Up</Link>}
                {auth.isAuth && <Link to='/signout'>Sign Out</Link>}
            </ul>
        </nav>
    );
});
export default Menu;