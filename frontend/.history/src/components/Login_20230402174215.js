import React, { useEffect } from 'react'


export default function Login() {
    useEffect(()=>{
        document.body.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0066/7569/3639/articles/how-to-eat-healthy.jpg?v=1611987977')"
    }, [])

    return (
        <section className='login'>
            <h1>Login<img /></h1>
            <form>
                <input type='text' />
                <input type='text' />
            </form>
        </section>
    )
}
