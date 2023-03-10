import PropTypes from 'prop-types';

// STYLESHEET
import './Menu.scss';

function Menu({ inFrench, lightMode }) {
  return (
    <main className={lightMode ? "menu-light" : "menu"}>
      <h2 className="menu-title">{inFrench ? "La Carte" : "Menu"}</h2>
      <section className="menu-section">
        <table className={lightMode ? "menu-table menu-table-light" : "menu-table"}>
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
              {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Rhum brun, porto rubis, jus de citron, blanc d'œuf, seltzer
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Dark rum, ruby port, lemon juice, egg white, club soda
                </td>
              }
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">{inFrench ? "Daiquiri Hemingway" : "Hemingway Daiquiri"}</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
            {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Rhum blanc, liqueur de marasquin, jus de citron vert, jus de pamplemousse
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  White rum, maraschino liqueur, lime juice, grapefruit juice
                </td>
              }
              </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Forbidden Fruit</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
            {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Brandy de pomme, Pimm's n°1, jus de citron, sirop simple, bière de gingembre, amers
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Apple brandy, Pimm's No. 1, lemon juice, simple syrup, ginger beer, bitters
                </td>
              }
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">French 75</td>
              <td className="menu-table-left-cell">12&euro;</td>
            </tr>
            <tr className="menu-table-row">
            {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Cognac, sirop simple, jus de citron, Champagne
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Cognac, simple syrup, lemon juice, Champagne
                </td>
              }
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">{inFrench ? "Spritz Hugo" : "Hugo Spritz"}</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
            {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  St-Germain, brin de menthe, prosecco, eau gazeuse
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  St-Germain, mint sprig, prosecco, soda water
                </td>
              }
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Pegu Club</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
              {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Gin, curaçao orange, jus de citron vert, amers
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Gin, orange curaçao, lime juice, bitters
                </td>
              }
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Division Bell</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
              {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Mezcal, Aperol, liqueur de marasquin, jus de citron vert
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Mezcal, Aperol, maraschino liqueur, lime juice
                </td>
              }
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Trato Hecho</td>
              <td className="menu-table-left-cell">12&euro;</td>
            </tr>
            <tr className="menu-table-row">
              {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Mezcal infusé à l'ananas, Chartreuse verte, liqueur de marasquin Luxardo, jus de citron vert
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Pineapple-infused mezcal, green Chartreuse, Luxardo maraschino liqueur, lime juice
                </td>
              }
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">West Side</td>
              <td className="menu-table-left-cell">10&euro;</td>
            </tr>
            <tr className="menu-table-row">
              {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Vodka au citron, sirop simple, jus de citron, menthe, seltzer
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Lemon vodka, simple syrup, lemon juice, mint, club soda
                </td>
              }
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">{inFrench ? "Good Cork" : "The Good Cork"}</td>
              <td className="menu-table-left-cell">12&euro;</td>
            </tr>
            <tr className="menu-table-row">
              {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Whisky, mezcal, bénédictine, amers
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Whiskey, mezcal, Benedictine, bitters
                </td>
              }
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">{inFrench ? "Le Man o'War" : "The Man o'War"}</td>
              <td className="menu-table-left-cell">12&euro;</td>
            </tr>
            <tr className="menu-table-row">
              {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Whisky de seigle, Cointreau, vermouth doux, citron
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Rye whiskey, Cointreau, sweet vermouth, lemon
                </td>
              }
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">{inFrench ? "Gemini" : "The Gemini"}</td>
              <td className="menu-table-left-cell">12&euro;</td>
            </tr>
            <tr className="menu-table-row">
              {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Bourbon, Cointreau, sirop de romarin, amers
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Bourbon, Cointreau, rosemary syrup, bitters
                </td>
              }
            </tr>
          </tbody>
        </table>
      </section>
      <section className="menu-section">
        <table className={lightMode ? "menu-table menu-table-light" : "menu-table"}>
          <thead>
            <tr>
              <th className="menu-section-title" colSpan="2">
                {
                  inFrench
                  ?
                  "Bières"
                  :
                  "Beer"
                }
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Berliner Schnauze</td>
              <td className="menu-table-left-cell">7&euro;</td>
            </tr>
            <tr className="menu-table-row">
              {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Lager ambrée allemande
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  German dark lager
                </td>
              }  
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Pêcheresse </td>
              <td className="menu-table-left-cell">7&euro;</td>
            </tr>
            <tr className="menu-table-row">
              {
                inFrench
                ?
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Lambic améliorée au jus de pêche
                </td>
                :
                <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                  Lambic enriched with peach juice
                </td>
              }              
            </tr>
            <tr className="menu-table-row">
              <td className="menu-table-right-cell">Vic Ale</td>
              <td className="menu-table-left-cell">8&euro;</td>
            </tr>
            <tr className="menu-table-row">
              <td className={lightMode ? "menu-table-double-cell menu-table-double-cell-light" : "menu-table-double-cell"} colSpan="2">
                Tsarish Double Imperial Stout
              </td>
            </tr>
          </tbody>
        </table>
        {
          inFrench
          ?
          <p className={lightMode ? "menu-paragraph menu-paragraph-light" : "menu-paragraph"}>Les bières pression sont souvent sujettes à changement.</p>
          :
          <p className={lightMode ? "menu-paragraph menu-paragraph-light" : "menu-paragraph"}>Draft beers are rotating and subject to change often.</p>
        }
      </section>
    </main>
  )
}

Menu.propTypes = {
  inFrench: PropTypes.bool.isRequired,
  lightMode: PropTypes.bool.isRequired
}

export default Menu;