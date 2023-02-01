import PropTypes from 'prop-types';

// STYLESHEET
import './Hours.scss';

function Hours({ inFrench, lightMode }) {

  return (
    <main className="hours">
      <h2 className="hours-title">{inFrench ? "Horaires" : "Hours"}</h2>
      <section className="hours-section">
        <table className="hours-table">
          <thead>
            <tr>
              <th className="hours-section-title" colSpan="2">
                <em className="hours-emphasis">The Drop</em> - Bar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hours-table-row">
              <td className="hours-table-left-cell">{inFrench ? "Lundi - Jeudi" : "Monday - Thursday"}</td>
              <td className="hours-table-right-cell">{inFrench ? "18h - 1h" : "6:00 p.m. - 1:00 a.m."}</td>
            </tr>
            <tr className="hours-table-row">
              <td className="hours-table-left-cell">{inFrench ? "Vendredi & Samedi" : "Friday & Saturday"}</td>
              <td className="hours-table-right-cell">{inFrench ? "18h - 2h" : "6:00 p.m. - 2:00 a.m."}</td>
            </tr>
            <tr className="hours-table-row">
              <td className="hours-table-left-cell">{inFrench ? "Dimanche" : "Sunday"}</td>
              <td className="hours-table-right-cell">{inFrench ? "18h - Minuit" : "6:00 p.m. - 12:00 a.m."}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="hours-section">
        <table className="hours-table">
          <thead>
            <tr>
              <th className="hours-section-title" colSpan="2">
                <em className="hours-emphasis">The Drop</em> - {inFrench ? "Restaurant" : "Kitchen"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hours-table-row">
              <td className="hours-table-left-cell">{inFrench ? "Lundi - Jeudi" : "Monday - Thursday"}</td>
              <td className="hours-table-right-cell">{inFrench ? "18h - 22h" : "6:00 p.m. - 10:00 p.m."}</td>
            </tr>
            <tr className="hours-table-row">
              <td className="hours-table-left-cell">{inFrench ? "Vendredi & Samedi" : "Friday & Saturday"}</td>
              <td className="hours-table-right-cell">{inFrench ? "18h - 23h" : "6:00 p.m. - 11:00 p.m."}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="hours-section">
        <p className="hours-paragraph">
          <em className="hours-emphasis">The Drop</em> {inFrench ? "est fermé le 25 Décembre et le 1er Janvier." : "closes for Christmas and New Year's Day."}
        </p>
      </section>
    </main>
  )
}

Hours.propTypes = {
  inFrench: PropTypes.bool.isRequired,
  lightMode: PropTypes.bool.isRequired,
}


export default Hours