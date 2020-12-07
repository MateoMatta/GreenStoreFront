import React, {useContext, useState, useEffect} from 'react';
import {AccountContext} from './auth/Accounts'

export default () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(() => {
                setLoggedIn(true);
            })
    }, []);

    return(
        <div className="navbar-start">
            {loggedIn && (
                <>
                <a href="/clients" className="navbar-item" style={{float:"left"}}>
                Clients
                </a>
                </>
            )}
        </div>
    )

}