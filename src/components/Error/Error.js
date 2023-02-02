import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// STYLESHEET
import './Error.scss';

function Error({ inFrench, lightMode }) {

  return (
    <main className={lightMode ? "error-light" : "error"}>
      <h2 className="error-title">
        {inFrench ? "Toutes nos excuses." : "Sorry."}
      </h2>
      <section className="error-section">
        <p className="error-paragraph">
          {
            inFrench
            ?
            "La page que vous recherchez n'existe pas !"
            :
            "We couldn't find the page you were looking for. This is either because:"
          }
        </p>
        <ul className="error-list">
          <li className="error-list-item">
            {
              inFrench
              ?
              "Vérifiez qu'il n'y ait pas d'erreur dans l'adresse URL de votre navigateur."
              :
              "There is an error in the URL entered into your web browser. Please check the URL and try again."
            }
          </li>
          <li className="error-list-item">
            {
              inFrench
              ?
              "Il se peut que la page que vous recherchiez ait été déplacée ou supprimée."
              :
              "The page you are looking for has been moved or deleted."
            }
          </li>
        </ul>
        <p className="error-paragraph">
          {
            inFrench
            ?
            <Link className="error-link" to="/">Retour à la page d'accueil.</Link>
            :
            <Link className="error-link" to="/">Back to Homepage.</Link>
          }
        </p>
      </section>
    </main>
  )
}

Error.propTypes = {
  inFrench: PropTypes.bool.isRequired,
  lightMode: PropTypes.bool.isRequired
}

export default Error