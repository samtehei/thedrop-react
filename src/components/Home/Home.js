import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// STYLESHEET
import './Home.scss';

function Home({ inFrench, lightMode }) {
  return (
    <main className={lightMode ? "home-light" : "home"}>
      <h2 className="home-title">
        {inFrench ? "Bienvenue." : "Welcome."}
      </h2>
      <section className="home-section">
      {
        inFrench
        ?
        <>
          <p className="home-paragraph">Situé au cœur de la vieille ville, <em className="home-emphasis">The Drop</em> apporte une touche de modernité aux "speakeasies" : c'est en s'inspirant de ces bars historiques que nous avons conçu un espace unique et contemporain. En offrant des services inégalés, nous nous efforçons d'élargir nos frontières au-delà de l'expérience traditionnelle.</p>
          <p className="home-paragraph">Venez profiter de l'ambiance d'un speakeasy avec une salle dédiée aux concerts de jazz et une sélection gastronomique avant-garde.</p>
        </>
        :
        <>
          <p className="home-paragraph">Located in the old city core, <em className="home-emphasis">The Drop</em> features a distinctly modern take on historical speakeasies. Old school cool meets a modern escape in our unique indoor design. Providing guests with unparalleled services, we strive to expand our boundaries beyond the traditional experience.</p>
          <p className="home-paragraph">Enjoy the ambiance of a speakeasy with a dedicated live jazz venue and cutting-edge gastronomic selections and libations.</p>
        </>
      }
        
      </section>
      <section className="home-section">
      {
        inFrench
        ?
        <p className="home-paragraph"><em className="home-emphasis">The Drop</em> est un gastropub unique en son genre. Nous sélectionnons tous nos vins, nos spiritueux et nos bières artisanales avec la plus grande attention pour vous offrir la meilleure des expériences. Notre <Link to="/la-carte">carte de cocktails</Link> change à chaque saison, apportant une touche de modernité aux classiques, mais aussi des créations que nous préparons spécialement pour vous.</p>
        :
        <p className="home-paragraph"><em className="home-emphasis">The Drop</em> offers guests a gastropub experience unique to the the city. We are proud of our carefully cultivated selection of wines, spirits and craft beers in a unique setting. Each season we create a new <Link to="/menu">cocktail menu</Link> with modern twists on classics or authentic crafts.</p>
      }
      </section>
    </main>
  )
}

Home.propTypes = {
  inFrench: PropTypes.bool.isRequired,
  lightMode: PropTypes.bool.isRequired
}

export default Home;