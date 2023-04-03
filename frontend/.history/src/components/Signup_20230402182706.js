import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    useEffect(() => {
        document.body.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0066/7569/3639/articles/how-to-eat-healthy.jpg?v=1611987977')"
    }, [])

    const handleLogin = () => {
        toast.success("Login Success", { position: "top-center" })
    }

    return (
        <section className='login'>
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
            <h1>Signup<img /></h1>
            <form className='login-form'>
                <input type='text' placeholder='Email' />
                <input type='text' placeholder='Username' />
                <input type='text' placeholder='Password' />
                <input type='button' value="Signup" onClick={handleLogin} />
                <p>already a user? <Link to="/login">login</Link></p>
            </form>
        </section>
    )
}
