import { Link } from 'react-router-dom';
import './Error.scss';

function Error() {
  return (
    <div className="error">
      <h1 className="error-title">Sorry.</h1>
      <section className="error-section">
        <p className="error-paragraph">
          We couldn't find the page you were looking for. This is either because:
          <ul className="error-list">
            <li className="error-list-item">
              There is an error in the URL entered into your web browser. Please check the URL and try again.
            </li>
            <li className="error-list-item">
              The page you are looking for has been moved or deleted.
            </li>
          </ul>
          You can return to our homepage by clicking <Link className="error-link" to="/">here</Link>.
        </p>
      </section>
    </div>
  )
}

export default Error