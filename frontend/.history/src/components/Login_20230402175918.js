import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'


export default function Login() {
    useEffect(()=>{
        document.body.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0066/7569/3639/articles/how-to-eat-healthy.jpg?v=1611987977')"
    }, [])

    const handleLogin = () => {
        
    }

    return (
        <section className='login'>
            <ToastContainer />
            <h1>Login<img /></h1>
            <form className='login-form'>
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <input type='button' value="login" onClick={handleLogin}/>
            </form>
        </section>
    )
}
