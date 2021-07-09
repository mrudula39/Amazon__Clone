import React from 'react'
import './Login.css'
import {Link} from "react-router-dom"

function Login() {
    return (
        
        <div className="login">
            <Link to ='/'>
            
            <img className="login_logo" src="https://www.bing.com/images/search?q=amazon+logo&id=5270856F841F26C598CC717B2B7E81EE315FF84E&form=IQFRBA&first=1&disoverlay=1"/>
            </Link>
            <div classNmae="login_container">
                <h1>sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type ="text"/>
                </form>
            </div>
        </div>
    )
}

export default Login
