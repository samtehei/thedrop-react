import './Hours.scss';

function Hours() {
  return (
    <main className="hours">
      <h2 className="hours-title">Hours</h2>
      <section className="hours-section">
        <table className="hours-table">
          <thead>
            <tr>
              <th className="hours-section-title" colspan="2">
                <em className="hours-emphasis">The Drop</em> - Bar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hours-table-row">
              <td className="hours-table-left-cell">Monday - Thursday</td>
              <td className="hours-table-right-cell">6:00 p.m. - 1:00 a.m.</td>
            </tr>
            <tr className="hours-table-row">
              <td className="hours-table-left-cell">Friday & Saturday</td>
              <td className="hours-table-right-cell">6:00 p.m. - 2:00 a.m.</td>
            </tr>
            <tr className="hours-table-row">
              <td className="hours-table-left-cell">Sunday</td>
              <td className="hours-table-right-cell">6:00 p.m. - 12:00 a.m.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="hours-section">
        <table className="hours-table">
          <thead>
            <tr>
              <th className="hours-section-title" colspan="2">
                <em className="hours-emphasis">The Drop</em> - Kitchen
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hours-table-row">
              <td className="hours-table-left-cell">Monday - Thursday</td>
              <td className="hours-table-right-cell">6:00 p.m. - 10:00 p.m.</td>
            </tr>
            <tr className="hours-table-row">
              <td className="hours-table-left-cell">Friday & Saturday</td>
              <td className="hours-table-right-cell">6:00 p.m. - 11:00 p.m.</td>
            </tr>
          </tbody>
        </table>
        <p className="hours-paragraph">
          Last kitchen orders at 9:30 p.m.
        </p>
      </section>
      <section className="hours-section">
        <p className="hours-paragraph">
          <em className="hours-emphasis">The Drop</em> closes for Christmas and New Year's Day.
        </p>
      </section>
    </main>
  )
}

export default Hours