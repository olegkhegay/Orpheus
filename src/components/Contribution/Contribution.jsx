import React from 'react'
import s from './Contribution.module.scss'
import Button from '../Button/Button'

const Contribution = ({ theme }) => {
  return (
    <>
        <section className={s.contribution}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.title}>
                        <h3>Contribution</h3>

                        <button className={s.viewMore}>View More</button>
                    </div>

                    <div className={s.cards}>
                        <div className={`${s.card} ${s.card1}`}>
                            <img className={s.cardImg} src={theme === 'light' ? '/Statue-light.png' : '/Statue-dark.png'} alt="statue" />

                            <div className={s.cardInfo}>
                                <h2>3D Greek Statue Pack</h2>
                                <h3>Over 200 Greek style sculpture</h3>
                                <Button><img src="/Download.svg" alt="download" /> Download</Button>
                            </div>
                        </div>

                        <div className={`${s.card} ${s.card2}`}>
                            <div className={s.cardInfo}>
                                <h2>Greek Statue Avatars</h2>
                                <h3>+500 Greek style
                                User Avatars</h3>
                                <Button><img src="/Download.svg" alt="download" /> Download</Button>
                            </div>

                            <img className={s.cardImg} src="/Greeks.png" alt="greeks" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contribution