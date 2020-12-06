import React, {useContext, useState, useEffect} from 'react';
import {AccountContext} from './Accounts'

export default () => {

    const [ status, setStatus ] = useState(false)
    const { getSession, logout } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session:', session)
                setStatus(true)
            })
    })

    return(
        <div>
            {status ? (
                <div>
                    <button onClick={logout} className="button is-primary">Sign Out</button>
                </div>
            ) : (
                <div className="buttons">
                    <a href="/register" className="button is-primary">
                    <strong>Register</strong>
                    </a>
                    <a href="/login" className="button is-light">
                    Log in
                    </a>
                </div>
                )}
        </div>
    )
}