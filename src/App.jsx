import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import InfoCard from './components/InfoCard'
function App() {

  const offers = [
    {
      id: 1,
      title: 'Move the borders of reality!',
      subtitle: 'Go on a space adventure – it’s possible with us!',
      button: { label: 'Learn more' },
      image: '/public/background-1.jpg'
    },
    {
      id: 2,
      title: 'Space is not \n just stars and planets',
      subtitle: 'Go on a space adventure',
      button: { label: 'Learn more' },
      image: '/public/background-2.jpg'
    },
    {
      id: 3,
      title: 'For those who dream of stars',
      subtitle: 'Our offer: make your dream come true',
      button: { label: 'Learn more' },
      image: '/public/background-3.jpg'
    },
    {
      id: 4,
      title: 'Fulfill your fantastic dreams',
      subtitle: 'Space has never been so close',
      button: { label: 'Learn more' },
      image: '/public/background-4.jpg'
    }
  ];

  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__inner container">
          <h1 className="hero__title">
            Discover the vast expanses of <span className="hero__title-accent">space</span>
          </h1>
          <p className="hero__subtitle">Where the possibilities are <span className="hero__subtitle-accent">endless!</span></p>
          <Button filled>Learn more</Button>
        </div>
      </section>
      <section className="cards__container container">
        <h2 className="cards__title">Offers</h2>
        <div className="cards">
          {offers.map(offer => (
            <InfoCard key={offer.id} {...offer} />
          ))}
        </div>
      </section>
      <section className='about container'>
        <h2 className="about__title">Embark on a space journey</h2>
        <p className='about__subtitle'>
          Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. 
          And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. 
          We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. 
          We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. 
          Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. 
          We offer various options for space excursions.
        </p>
         <details className="read-more">
          <summary className="read-more__button">Read more</summary>
          <div className="read-more__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </details>
      </section>
      <Footer />
    </>
  )
}

export default App
