/* eslint-disable react/no-unescaped-entities */
import "../assets/style/home.css";
import { CardContainer } from "./Section_about/CardContainer";
import { DescriptionContainer } from "./Section_about/DescriptionContainer";
// import { Grafic } from "./Section_about/ReChar";
import "../assets/js/main.js";
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
        <CardContainer />
        <DescriptionContainer />
      </section>
      <section id="section__projects">
        <h1>Hola</h1>
      </section>
    </main>
  );
}
