import './Menu.scss';

function Menu() {
  return (
    <main className="menu">
      <h2 className="menu-title">Menu</h2>
      <section className="menu-section">
        <table className="menu-table">
          <thead>
            <tr>
              <th className="menu-section-title" colSpan="2">
                <em className="menu-emphasis">Cocktails</em>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Chicago Fizz</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Dark rum, ruby port, lemon juice, egg white, club soda
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Hemingway Daiquiri</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                White rum, maraschino liqueur, lime juice, grapefruit juice
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Forbidden Fruit</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Apple brandy, Pimm's No. 1, lemon juice, simple syrup, ginger beer, bitters
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">French 75</td>
              <td className="menu-table-left-cell">12&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
              Cognac, simple syrup, lemon juice, Champagne
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Hugo Spritz</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                St-Germain, mint sprig, prosecco, soda water
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Pegu Club</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Gin, orange curaçao, lime juice, bitters
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Division Bell</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Mezcal, Aperol, maraschino liqueur, lime juice
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Trato Hecho</td>
              <td className="menu-table-left-cell">12&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Pineapple-infused mezcal, green Chartreuse, Luxardo maraschino liqueur, lime juice
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">West Side</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Lemon vodka, simple syrup, lemon juice, mint, club soda
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">The Good Cork</td>
              <td className="menu-table-left-cell">12&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Whiskey, mezcal, Benedictine, bitters
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">The Man O'War</td>
              <td className="menu-table-left-cell">12&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Rye whiskey, Cointreau, sweet vermouth, lemon
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">The Gemini</td>
              <td className="menu-table-left-cell">12&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Bourbon, Cointreau, rosemary syrup, bitters
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="menu-section">
        <table className="menu-table">
          <thead>
            <tr>
              <th className="menu-section-title" colSpan="2">
                <em className="menu-emphasis">Beer</em>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Berliner Schnauze</td>
              <td className="menu-table-left-cell">7&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                German dark lager
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Pêcheresse </td>
              <td className="menu-table-left-cell">7&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Lambic enriched with peach juice
              </td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Vic Ale</td>
              <td className="menu-table-left-cell">8&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-double-cell" colSpan="2">
                Tsarish Double Imperial Stout
              </td>
            </tr>
          </tbody>
        </table>
        <p className="menu-paragraph">Draft beers are rotating and subject to change often.</p>
      </section>
    </main>
  )
}

export default Menu