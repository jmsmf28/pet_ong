import React from 'react';

function Header ({ children, title}) {
    return (
        <header>
            <h1>{title}</h1>
            <h1>{children}</h1>
        </header>
    );
}

/** or
 * function Header (props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <h1>{props.children}</h1>
        </header>
    );
}
 */


export default Header;