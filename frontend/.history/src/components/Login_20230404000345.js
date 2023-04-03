import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const handleLogin = () => {
        toast.success("Login Success", { position: "top-center" })
    }

    return (
        <section className='login'>
            <div className='login-overlay'>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <h1>Login<img /></h1>
            <form className='login-form'>
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <input type='button' value="Login" onClick={handleLogin}/>
                <p>new here? <Link to="/signup">signup</Link></p>
            </form>

            </div>
        </section>
    )
}
