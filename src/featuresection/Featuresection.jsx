import React from 'react'
import styles from './Featuresection.module.css'
import classNames from 'classnames'

function Featuresection(){




    return(
        <>
        <section className={styles.features__container}>
        
        <div className={styles.feature}>
          <div className={styles.feature__details}>
            <h3 className={styles.feature__title}>Enjoy on your TV.</h3>
            <h5 className={styles.feature__sub__title}>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h5>
          </div>
          <div className={styles.feature__image__container}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="Feature image"
              className={styles.feature__image}
            />
            <div className={styles.feature__backgroud__video__container}>
              <video
                autoPlay
                loop
                muted
                className={styles.feature__backgroud__video}
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        
        <div className={styles.feature}>
          <div className={styles.feature__details}>
            <h3 className={styles.feature__title}>
              Download your shows to watch offline.
            </h3>
            <h5 className={styles.feature__sub__title}>
              Save your favourites easily and always have something to watch.
            </h5>
          </div>
          <div className={classNames(styles.feature__image__container , styles.feature__image__container2)} >
            <img 
              src="src/images/mobile-0819-Photoroom.png"
              alt="Feature image"
              className={classNames(styles.feature__image , styles.feature__image2)}
            />
           
              <div className={styles.feature__backgroud__video__container2}>
                 <video
                    autoPlay
                    loop
                    muted
                    className={styles.feature__backgroud__video2}
                    
                    >
                    <source
                    src="src/images/Introducing Jam on Spotify.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.feature__details}>
            <h3 className={styles.feature__title}>Watch everywhere.</h3>
            <h5 className={styles.feature__sub__title}>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h5>
          </div>
          
          
          <div className={styles.feature__image__container}>
            <img
              
              src="src/images/tv-Photoroom.png"
              alt="Feature image"
              className={styles.feature__image}
            />
            <div className={styles.feature__backgroud__video__container}>
              <video
                autoPlay
                loop
                muted
                className={styles.feature__backgroud__video}
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </video>
          </div>
        </div>
        </div>
        
        
       
      </section>
        
        
        </>
    )
}
export default Featuresection