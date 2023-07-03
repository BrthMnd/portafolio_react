/* eslint-disable react/no-unescaped-entities */
import "../assets/style/home.css";
export function Home() {
  return (
    <main>
      <section id="section__home">
        <div id="presentacion">
          <h1>
            ¡Hello! I'm <span>Brandon</span>
          </h1>
          <h3>
            and I'm a <span>developer</span>
          </h3>
        </div>
      </section>
      <section id="section__about">
        <h1>About me</h1>
        <div id="card_container">
          <div className="card">
            <box-icon name="balloon" type="solid" size="100px"></box-icon>
            <h4>Team Work</h4>
          </div>
        </div>
        <div id="description__container">
          <div>
            <h1>¿How am I?</h1>
            <p>
              I'm a <span>developer</span> and I'm passionate about learning new
              technologies.
            </p>
          </div>
          <div id="table__data"></div>
        </div>
      </section>
    </main>
  );
}
