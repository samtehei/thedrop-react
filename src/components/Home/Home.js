import './Home.scss';

export default function Home() {
  return (
    <main className="home">
      <h2 className="home-title">
        Welcome.
      </h2>
      <section className="home-section">
        <p className="home-paragraph">Located in the old city core, <em className="home-emphasis">The Drop</em> features a distinctly modern take on historical speakeasies. Old school cool meets a modern escape in our unique indoor design. Providing guests with unparalleled services, we strive to expand our boundaries beyond the traditional experience.</p>
        <p className="home-paragraph">Enjoy the ambiance of a speakeasy with a dedicated live jazz venue, cutting-edge gastronomic selections and libations.</p>
      </section>
      <section className="home-section">
      <p className="home-paragraph"><em className="home-emphasis">The Drop</em> offers guests a gastropub experience unique to the the city. We are proud of our carefully cultivated selection of wines, spirits and craft beers in a unique setting. Each season we create a new cocktail menu with modern twists on classics or authentic crafts.</p>
      </section>
    </main>
  )
}
