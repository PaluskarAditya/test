import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [cred, setCred] = useState({uname: "", pass: ""})
    const handleLogin = () => {
        console.log(cred)
        toast.success("Login Success", { position: "top-center" })
    }

    const onchange = (e) => {
        setCred({...cred, [e.target.name] : e.target.value})
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
                <input type='text' placeholder='Username' value={cred.uname} name='uname' id='uname' onchange={onchange}/>
                <input type='text' placeholder='Password' value={cred.pass} name='pass' id='pass' onchange={onchange}/>
                <input type='submit' value="Login" />
                <p>new here? <Link to="/signup">signup</Link></p>
            </form>

            </div>
        </section>
    )
}
