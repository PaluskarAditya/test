import React, { useEffect } from 'react'


export default function Login() {
    useEffect(()=>{
        document.body.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0066/7569/3639/articles/how-to-eat-healthy.jpg?v=1611987977')"
    }, [])

    return (
        <section className='login'>
            <h1>Login<img /></h1>
            <form className='login-form'>
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <input type='button' value="login"/>
            </form>
        </section>
    )
}
