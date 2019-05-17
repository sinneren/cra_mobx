import React from 'react';
import Menu from '../../containers/Menu';

const Layout = ( props ) => {
    return (
        <div className="App">
            <header className="App-header">
                <Menu />
            </header>
            <div className="Container">
                {props.children}
            </div>
        </div>
    )
};

export default Layout;