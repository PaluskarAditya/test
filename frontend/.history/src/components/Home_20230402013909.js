import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()
  return (
    <div className='home'>
      <section className='home-sec-1'>
        <h1>Shree Tiffin Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi soluta suscipit similique quos, facilis quae sit neque aliquam dignissimos, illo nam quasi ipsum. Nemo tempora quidem iusto commodi optio.</p>
        <button className="order-btn">Order Now</button>
      </section>
      <section className="home-sec-2">
        <h1>About Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, eveniet accusantium! Sequi fuga quod dolores unde fugit assumenda excepturi! Deleniti et consectetur repudiandae eveniet sunt ipsa numquam quo, voluptate sequi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit porro veritatis blanditiis! Repudiandae error vero vel beatae amet reiciendis porro earum at repellendus nobis eaque expedita, culpa quis? Qui, aperiam.</p>
      </section>
    </div>
  )
}
