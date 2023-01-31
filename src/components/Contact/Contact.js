import { useEffect, useState } from 'react';
import './Contact.scss';

function Contact() {

    // Success modal for submitted form
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    document.body.addEventListener('click', () => {
      setOpenModal(false);
    });
  });

  return (
    <main className="contact">
      <h2 className="contact-title">Contact</h2>
      <section className="contact-section">
        <p className="contact-paragraph">
          Please submit the form below for generic inquiries, comments, or feedback.
        </p>
      </section>
      <section className="contact-section">

      {/* CONTACT FORM */}
      <form
          action=""
          className="reservations-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
            setOpenModal(!openModal);
          }}
        >
            <label className="contact-form-labels" htmlFor="name">
              Full Name:
            </label>
            <input
              className="contact-form-input contact-form-name"
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
            />
            <label className="contact-form-labels" htmlFor="email">
              Email:
            </label>
            <input
              className="contact-form-input contact-form-email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <label className="contact-form-labels" htmlFor="phone">
              Phone number:
            </label>
            <input
              className="contact-form-input contact-form-phone"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              required
            />
            <label className="contact-form-labels" htmlFor="comment">
              Comment:
            </label>
            <textarea
              className="contact-form-input contact-form-comment"
              type="text"
              id="comment"
              name="comment"
              placeholder="Comment..."
              required
            />
            <button className="contact-form-button" type="submit">
              Submit
            </button>
        </form>

        {/* SUCCESS MODAL FOR SUBMITTED FORM */}
        <div className={openModal ? "contact-modal" : "contact-modal-hidden"}>
          <div
            className="reservations-modal-content"
            onClick={(e) => {e.stopPropagation();}}
          >
            <div className="contact-modal-header">
              <button 
                type="button"
                className="contact-modal-close"
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                &times;
              </button>
              <h3 className="contact-title">Your form was successfully submitted.</h3>
            </div>
            <div className="contact-modal-body">
              <p className="contact-modal-paragraph">Thank you.</p>
              <p className="contact-modal-paragraph">This will help us better serve you and get you in touch with the correct person more quickly.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact