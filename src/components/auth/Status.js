import React, {useContext, useState, useEffect} from 'react';
import {AccountContext} from './Accounts'

export default () => {

    const [ status, setStatus ] = useState(false)
    const { getSession, logout } = useContext(AccountContext)
    const [username,setUsername] = useState('');

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session:', session)
                setStatus(true)
                setUsername(session.email)
            })
    })

    return(
        <div>
            {status ? (
                <div className="navbar-start">
                    <p style={{marginLeft:"1%"}}>{username}</p>
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