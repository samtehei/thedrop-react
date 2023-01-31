import { useEffect, useState } from 'react';
import './Reservations.scss';

function Reservations() {

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
        Reservations
      </h2>
      <section className="reservations-section">
        <p className="reservations-paragraph">
          <em className="reservations-emphasis">The Drop</em> is welcoming to group of twos, fives, or a crowd. Reservations for regular dining are not required, but always recommended. Reservations after 9:30pm do not include dining.
        </p>
        <p className="reservations-paragraph">
          Private event inquiries are currently being accepted.
        </p>
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
              Date:
            </label>
            <input
              className="reservations-form-input reservations-form-date"
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              required
            />
            <label className="reservations-form-labels" htmlFor="time">
              Time:
            </label>
            <select 
              className="reservations-form-time"
              defaultValue={'DEFAULT'}
              required
            >
              <option value="DEFAULT" disabled>Reservation time</option>
              <option value="6">6:00pm</option>
              <option value="63">6:30pm</option>
              <option value="7">7:00pm</option>
              <option value="73">7:30pm</option>
              <option value="8">8:00pm</option>
              <option value="83">8:30pm</option>
              <option value="9">9:00pm</option>
              <option value="93">9:30pm</option>
              <option value="10">10:00pm</option>
              <option value="13">10:30pm</option>
              <option value="11">11:00pm</option>
            </select>
            <label className="reservations-form-labels" htmlFor="guests">
              Number of guests:
            </label>
            <input
              className="reservations-form-input reservations-form-guests"
              type="number"
              id="guests"
              name="guests"
              min="2"
              max="14"
              placeholder="Number of guests"
              required
            />
            <label className="reservations-form-labels" htmlFor="name">
              Name:
            </label>
            <input
              className="reservations-form-input reservations-form-name"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <label className="reservations-form-labels" htmlFor="email">
              Email:
            </label>
            <input
              className="reservations-form-input reservations-form-email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <label className="reservations-form-labels" htmlFor="phone">
              Phone number:
            </label>
            <input
              className="reservations-form-input reservations-form-phone"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              required
            />
            <label className="reservations-form-labels" htmlFor="comment">
              Comment:
            </label>
            <textarea
              className="reservations-form-input reservations-form-comment"
              type="text"
              id="comment"
              name="comment"
              placeholder="Comment..."
            />
            <button className="reservations-form-button" type="submit">
              Book now
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
              <h3 className="reservations-title">Your reservation was successfully submitted.</h3>
            </div>
            <div className="reservations-modal-body">
              <p className="reservations-modal-paragraph">Thank you.</p>
              <p className="reservations-modal-paragraph">You will get notified two hours in advance.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Reservations