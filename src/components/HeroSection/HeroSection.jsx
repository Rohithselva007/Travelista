import style from './HeroSection.module.css'
const HeroSection = () => {
  return (
    <>
    <section className={style.hero}>
                <div className={style.heroContent}>

                    <p className={style.subtitle}>
                        AWAY FROM MONOTONOUS LIFE
                    </p>

                    <h1>
                        MAGICAL TRAVEL
                    </h1>

                    <p className={style.description}>
                        If you are looking at blank cassettes on the web,
                        you may be very confused at the difference in price.
                        You may see some for as low as $17 each.
                    </p>

                    <button className={style.heroButton}>
                        GET STARTED
                    </button>

                </div>
            </section>
        </>
               
  )
}


export default HeroSection