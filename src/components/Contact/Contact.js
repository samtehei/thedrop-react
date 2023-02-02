import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// STYLESHEET
import './Contact.scss';

function Contact({ inFrench, lightMode }) {

  // Success modal for submitted form
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    document.body.addEventListener('click', () => {
      setOpenModal(false);
    });
  });

  return (
    <main className={lightMode ? "contact contact-light" : "contact"}>
      <h2 className="contact-title">Contact</h2>
      <section className="contact-section">
        
          {
            inFrench
            ?
            <p className="contact-paragraph">Merci d'utiliser le formulaire ci-dessous pour toutes questions et commentaires généraux.</p>
            :
            <p className="contact-paragraph">Please submit the form below for generic inquiries, comments, or feedback.</p>
          }
        
      </section>
      <section className="contact-section">

      {/* CONTACT FORM */}
      <form
          action=""
          className={lightMode ? "reservations-form reservations-form-light" : "reservations-form"}
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
            setOpenModal(!openModal);
          }}
        >
            <label className="contact-form-labels" htmlFor="name">
              {inFrench ? "Nom complet :" : "Full Name:"}
            </label>
            <input
              className={lightMode ? "contact-form-input contact-form-input-light contact-form-name" : "contact-form-input contact-form-name"}
              type="text"
              id="name"
              name="name"
              placeholder={inFrench ? "Nom complet" : "Full Name"}
              required
            />
            <label className="contact-form-labels" htmlFor="email">
              {inFrench ? "E-mail :" : "Email:"}
            </label>
            <input
              className={lightMode ? "contact-form-input contact-form-input-light contact-form-email" : "contact-form-input contact-form-email"}
              type="email"
              id="email"
              name="email"
              placeholder={inFrench ? "E-mail" : "Email"}
              required
            />
            <label className="contact-form-labels" htmlFor="phone">
              {inFrench ? "Numéro de téléphone :" : "Phone number:"}
            </label>
            <input
              className={lightMode ? "contact-form-input contact-form-input-light contact-form-phone" : "contact-form-input contact-form-phone"}
              type="tel"
              id="phone"
              name="phone"
              placeholder={inFrench ? "Numéro de téléphone" : "Phone number"}
              required
            />
            <label className="contact-form-labels" htmlFor="comment">
              {inFrench ? "Commentaire :" : "Comment:"}
            </label>
            <textarea
              className={lightMode ? "contact-form-input contact-form-input-light contact-form-comment" : "contact-form-input contact-form-comment"}
              type="text"
              id="comment"
              name="comment"
              placeholder={inFrench ? "Commentaire..." : "Comment..."}
              required
            />
            <button className={lightMode ? "contact-form-button contact-form-button-light" : "contact-form-button"} type="submit">
              {inFrench ? "Envoyer" : "Submit"}
            </button>
        </form>

        {/* SUCCESS MODAL FOR SUBMITTED FORM */}
        <div className={openModal ? "contact-modal" : "contact-modal-hidden"}>
          <div
            className={lightMode ? "contact-modal-content contact-modal-content-light" : "contact-modal-content"}
            onClick={(e) => {e.stopPropagation();}}
          >
            <div className="contact-modal-header">
              <button 
                type="button"
                className={lightMode ? "contact-modal-close contact-modal-close-light" : "contact-modal-close"}
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                &times;
              </button>
              <h3 className="contact-title">
                {
                  inFrench
                  ?
                  "Votre message a bien été pris en compte."
                  :
                  "Your form was successfully submitted."
                }
              </h3>
            </div>
            <div className="contact-modal-body">
              {
                inFrench
                ?
                <>
                  <p className="contact-modal-paragraph">Merci.</p>
                  <p className="contact-modal-paragraph">Votre message nous permettra d'améliorer notre service et de vous diriger plus rapidement vers le service adéquate.</p>
                </>
                :
                <>
                  <p className="contact-modal-paragraph">Thank you.</p>
                  <p className="contact-modal-paragraph">This will help us better serve you and get you in touch with the correct person more quickly.</p>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

Contact.propTypes = {
  inFrench: PropTypes.bool.isRequired,
  lightMode: PropTypes.bool.isRequired
}


export default Contact