import React from 'react'
import s from './Footer.module.scss'

const Footer = ({theme}) => {
  return (
    <>
        <footer className={s.footer}>
            <div className="container">
                <div className={s.wrap}>
                    <h2>Let's Connect</h2>
                    <p>Get in touch for opportunities or just to say hi! 👋</p>

                    <div className={s.social}>
                        <img src="/LinkedIn.svg" alt="Linkedin" />
                        <img src="/Basketball.svg" alt="Basketball" />
                        <img src="/Instagram.svg" alt="Instagram" />
                        <img src="/Medium.svg" alt="Medium" />
                        <img src="/Mail.svg" alt="Mail" />
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer