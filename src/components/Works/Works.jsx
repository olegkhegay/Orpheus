import React, { useState } from 'react'
import s from './Works.module.scss'


const Works = ({ theme }) => {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(prev => !prev);
  };

  return (
    <>
        <section className={s.works}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.title}>
                        <h3>Recent NFT</h3>

                        <button className={s.viewMore} onClick={handleViewMore}>
                          {showAll ? 'Close' : 'View More'}
                        </button>
                    </div>

                    <div className={s.cards}>
                        <img className={s.card} src={theme === 'light' ? '/Card1-light.png' : '/Card1-dark.png'} alt="card" />
                        <img className={s.card} src={theme === 'light' ? '/Card2-light.png' : '/Card2-dark.png'} alt="card" />
                        <img className={s.card} src={theme === 'light' ? '/Card3-light.png' : '/Card3-dark.png'} alt="card" />
                        <img className={`${s.card} ${showAll ? s.fadeIn : s.hidden}`} src="/Card4.png" alt="card" />
                        <img className={`${s.card} ${showAll ? s.fadeIn : s.hidden}`} src="/Card5.png" alt="card" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Works