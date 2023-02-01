import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// STYLESHEET
import './Reservations.scss';

function Reservations({ inFrench, lightMode }) {

  // Success modal for submitted form
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    document.body.addEventListener('click', () => {
      setOpenModal(false);
    });
  });

  return (
    <main className="reservations">
      <h2 className="reservations-title">
        {inFrench ? "Réservations" : "Reservations"}
      </h2>
      <section className="reservations-section">
      {
        inFrench
        ?
        <>
          <p className="reservations-paragraph">
            <em className="reservations-emphasis">The Drop</em> accueille des groupes de deux ou plus. Il n'est pas nécessaire de réserver une table pour manger, mais nous le recommandons fortement. La cuisine fermant à 22h, les réservations à partir de 21h30 ne sont disponibles que pour le bar.
          </p>
          <p className="reservations-paragraph">
            Nous acceptons les privatisations de salle pour des occasions spéciales.
          </p>
        </>
        :
        <>
          <p className="reservations-paragraph">
            <em className="reservations-emphasis">The Drop</em> is welcoming to group of twos, fives, or a crowd. Reservations for regular dining are not required, but always recommended. Reservations after 9:30pm do not include dining.
          </p>
          <p className="reservations-paragraph">
            Private event inquiries are currently being accepted.
          </p>
        </>
      }
      </section>
      <section className="reservations-section">

        {/* RESERVATION FORM */}
        <form
          action=""
          className="reservations-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
            setOpenModal(!openModal);
          }}
        >
            <label className="reservations-form-labels" htmlFor="date">
              {inFrench ? "Jour :" : "Date:"}
            </label>
            <input
              className="reservations-form-input reservations-form-date"
              type="date"
              id="date"
              name="date"
              placeholder={inFrench ? "Jour" : "Date"}
              required
            />
            <label className="reservations-form-labels" htmlFor="time">
              {inFrench ? "Heure d'arrivée :" : "Time:"}
            </label>
            <select 
              className="reservations-form-time"
              defaultValue={'DEFAULT'}
              required
            >
              <option value="DEFAULT" disabled>{inFrench ? "Heure d'arrivée" : "Time"}</option>
              <option value="6">{inFrench ? "18h00" : "6:00p.m."}</option>
              <option value="63">{inFrench ? "18h30" : "6:30p.m."}</option>
              <option value="7">{inFrench ? "19h00" : "7:00p.m."}</option>
              <option value="73">{inFrench ? "19h30" : "7:30p.m."}</option>
              <option value="8">{inFrench ? "20h00" : "8:00p.m."}</option>
              <option value="83">{inFrench ? "20h30" : "8:30p.m."}</option>
              <option value="9">{inFrench ? "21h00" : "9:00p.m."}</option>
              <option value="93">{inFrench ? "21h30" : "9:30p.m."}</option>
              <option value="10">{inFrench ? "22h00" : "10:00p.m."}</option>
              <option value="13">{inFrench ? "22h30" : "10:30p.m."}</option>
              <option value="11">{inFrench ? "23h00" : "11:00p.m."}</option>
            </select>
            <label className="reservations-form-labels" htmlFor="guests">
              {inFrench ? "Nombre de convives :" : "Number of guests:"}
            </label>
            <input
              className="reservations-form-input reservations-form-guests"
              type="number"
              id="guests"
              name="guests"
              min="2"
              max="14"
              placeholder={inFrench ? "Nombre de convives" : "Number of guests"}
              required
            />
            <label className="reservations-form-labels" htmlFor="name">
              {inFrench ? "Nom :" : "Name:"}
            </label>
            <input
              className="reservations-form-input reservations-form-name"
              type="text"
              id="name"
              name="name"
              placeholder={inFrench ? "Nom" : "Name"}
              required
            />
            <label className="reservations-form-labels" htmlFor="email">
              {inFrench ? "E-mail :" : "Email:"}
            </label>
            <input
              className="reservations-form-input reservations-form-email"
              type="email"
              id="email"
              name="email"
              placeholder={inFrench ? "E-mail" : "Email"}
              required
            />
            <label className="reservations-form-labels" htmlFor="phone">
              {inFrench ? "Numéro de téléphone :" : "Phone number:"}
            </label>
            <input
              className="reservations-form-input reservations-form-phone"
              type="tel"
              id="phone"
              name="phone"
              placeholder={inFrench ? "Numéro de téléphone" : "Phone number"}
              required
            />
            <label className="reservations-form-labels" htmlFor="comment">
              {inFrench ? "Commentaire :" : "Comment:"}
            </label>
            <textarea
              className="reservations-form-input reservations-form-comment"
              type="text"
              id="comment"
              name="comment"
              placeholder={inFrench ? "Commentaire..." : "Comment..."}
            />
            <button className="reservations-form-button" type="submit">
              {inFrench ? "Réserver" : "Book now"}
            </button>
        </form>

        {/* SUCCESS MODAL FOR SUBMITTED FORM */}
        <div className={openModal ? "reservations-modal" : "reservations-modal-hidden"}>
          <div
            className="reservations-modal-content"
            onClick={(e) => {e.stopPropagation();}}
          >
            <div className="reservations-modal-header">
              <button 
                type="button"
                className="reservations-modal-close"
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                &times;
              </button>
              <h3 className="reservations-title">
                {
                  inFrench
                  ?
                  "Votre réservation a bien été prise en compte."
                  :
                  "Your reservation was successfully submitted."
                }
              </h3>
            </div>
            <div className="reservations-modal-body">
              {
                inFrench
                ?
                <>
                  <p className="reservations-modal-paragraph">Merci.</p>
                  <p className="reservations-modal-paragraph">Vous recevrez une notification deux heures avant votre réservation.</p>
                </>
                :
                <>
                  <p className="reservations-modal-paragraph">Thank you.</p>
                  <p className="reservations-modal-paragraph">You will get notified two hours in advance.</p>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

Reservations.propTypes = {
  inFrench: PropTypes.bool.isRequired,
  lightMode: PropTypes.bool.isRequired
}

export default Reservations