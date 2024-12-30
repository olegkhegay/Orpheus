import React from 'react'
import s from './Hero.module.scss'
import Button from '../Button/Button'

const Hero = ({ theme }) => {
  return (
    <>
        <section className={s.hero}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.title}>
                        <h1>Yet the story of <br /> <span>Orpheus</span> </h1>

                        <p>Product & Graphic Designer, with experience in  delivering end-to-end UX/UI design for software  products.</p>

                        <div className={s.buttons}>
                            <button className={s.works}>Works <img src="/Down-arrow.svg" alt="down arrow" /></button>
                            <Button>Free Stuff</Button>
                        </div>
                    </div>

                    <img src={theme === 'light' ? '/Full-Hero-Light.png' : '/Full-Hero-Dark.png'} alt="hero" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero