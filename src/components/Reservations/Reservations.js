import './Reservations.scss';

function Reservations() {
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
        <form
          action=""
          className="reservations-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e)
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
            <input
              className="reservations-form-input reservations-form-comment"
              type="text"
              id="comment"
              name="comment"
              placeholder="Comment"
              required
            />
            <button className="reservations-form-button" type="submit">
              Book now
            </button>
        </form>
      </section>
    </main>
  )
}

export default Reservations