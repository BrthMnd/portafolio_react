/* eslint-disable react/no-unescaped-entities */
import "../assets/style/home.css";
import { CardContainer } from "./Section_about/CardContainer";
import { DescriptionContainer } from "./Section_about/DescriptionContainer";
import { BoxComponent } from "./Section_projects/BoxComponents";
import { ContactComponents } from "./Section_contact_me/index";
import { FooterComponets } from "./Section_footer/FooterComponets";
export function Home() {
  return (
    <main>
      {/* Home 🏠 */}
      <section id="section__home">
        <div id="presentacion" data-aos="zoom-out-up" data-aos-duration="2000">
          <h1>
            ¡Hello! I'm <span>Brandon</span>
          </h1>
          <h3>
            and I'm a <span>developer</span>
          </h3>
        </div>
      </section>

      {/* about me 🤵 */}
      <section id="section__about" data-aos="fade-right">
        <h1>About me</h1>
        <CardContainer />
        <DescriptionContainer />
      </section>

      {/* Projets ⚠️ */}
      <BoxComponent />

      {/* Contact me 👎 */}

      <ContactComponents />
      {/* Footer 👎 */}
      <FooterComponets />
    </main>
  );
}
