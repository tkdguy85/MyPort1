import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'
import { StaticImage } from 'gatsby-plugin-image'


export default function about() {
  return (
    <Layout>
      <div className={styles.intro}>
        <h1>About me</h1>
      </div>
      <section className={styles.section}>
        {/* Main */}
        <div>
          <h3>Who Am I?</h3>
          <p> Call it a career change or an awakening, the difference is negligible. I'm a scientist at heart, constantly learning and absorbing the tech world around me, whilst also challenging and testing what is and isn't possible. Wanting to know more than just what works, I want to know why. Seeking to grow at every chance, I'm just as happy to take a step back and be a guide to those who ask, regardless of skill level or title.</p>
          <p>Weirdness is in the eye of the beholder. I am a culmination of a variety of different walks: martial arts, extreme sports, photography, astronomy, biology, music, and more. Whether it's tinkering with a poorly soldered guitar, swapping the valve gasket in a car, or trusting the 5 min YouTube clip that says changing my laptop's ram is easy (it was), my curiosity has taken me on loads of journeys full of ups and downs, good and bad, long trips and dead ends.</p>
          
        </div>
        <div className={styles.photo}>
          <div>
            <StaticImage className={styles.img} src='../images/self/flip.jpg'/>
          </div>
          <div>
            <StaticImage className={styles.img} src='../images/self/kick.png'/>
          </div>
          <div>
            <StaticImage className={styles.img} src='../images/self/me.jpg'/>
          </div>
        </div>
      </section>
      
      {/* Social Links */}
      
      <div className='{}'>
        <h2>Get in touch</h2>
      </div>
      <section>
        
        <p> Feel free to email me at <span className={styles.span}><a href="mailto:dallasgordon3@gmail.com">dallasgordon3@gmail.com</a></span> or click on any of the links below. Enjoy the day.</p>        
        
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/tkdguy85/">
            <StaticImage className={styles.icon} src='../images/icons/link.png' />
          </a>

          <a href="https://github.com/tkdguy85/">
            <StaticImage className={styles.icon} src='../images/icons/git.png' />
          </a>

          <a href="https://hashnode.com/@tkdguy85">
            <StaticImage className={styles.icon} src='../images/icons/hash.png' />
          </a>

          <a href="https://www.instagram.com/tkdguy85/">
            <StaticImage className={styles.icon} src='../images/icons/insta.png' />
          </a>
        </div>
      </section>
      
      
    </Layout>
  )
}
