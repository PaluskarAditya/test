import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()

  const useit = () => {
    nav("/menu")
  }

  const links = [
    {name: "Swiggy", img: "https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2020/03/1_Qw11nbTP2pBb08x-H2WDSA.png"}, 
    {name: "Zomato", img: ""} 
  ]

  return (
    <div className='home'>
      <section className='home-sec-1'>
        <div className="overlay">
          <h1>Shree Tiffin Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi soluta suscipit similique quos, facilis quae sit neque aliquam dignissimos, illo nam quasi ipsum. Nemo tempora quidem iusto commodi optio.</p>
          <button className="order-btn" onClick={useit}>Order Now</button>
        </div>
      </section>
      <section className="home-sec-2">
        <h1>About Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, eveniet accusantium! Sequi fuga quod dolores unde fugit assumenda excepturi! Deleniti et consectetur repudiandae eveniet sunt ipsa numquam quo, voluptate sequi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit porro veritatis blanditiis! Repudiandae error vero vel beatae amet reiciendis porro earum at repellendus nobis eaque expedita, culpa quis? Qui, aperiam.</p>
      </section>
      <section className="home-sec-3">
        <div className="reach-overlay">
          <h1>Check more about us</h1>
          <div className="links">
            {links.map(item => <div className='link-card'>
              <img className='item-img' src={item.img} alt="" />
              <h2 className='item-name'>{item.name}</h2>
              <button>visit</button>
            </div>)}
          </div>
        </div>
      </section>
    </div>
  )
}
