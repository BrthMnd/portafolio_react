import { DescriptionContainer } from "./DescriptionContainer";
import { CardContainer } from "./CardContainer";

export function AboutComponent() {
  return (
    <section id="section__about">
      <div data-aos="fade-right">
        <h1>About me</h1>
      </div>
      <CardContainer />
      <DescriptionContainer />
    </section>
  );
}
