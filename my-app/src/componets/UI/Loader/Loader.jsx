import React from 'react';
import cl from './Loader.module.css';

const Loader = ({children}) => {
    return (
        <div className={cl.loader}>
            {children}
        </div>
    );
}

export default Loader;
