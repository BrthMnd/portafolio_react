/* eslint-disable react/no-unescaped-entities */
import { Grafic } from "./ReChar";
import { Button } from "react-bootstrap";
export function DescriptionContainer() {
  return (
    <div id="description__container">
      <div id="text__description">
        <h2>¿How am I?</h2>
        <p>
          I'm a <span>developer</span> and I'm passionate about learning new
          technologies.
        </p>
        <Button variant="dark" onClick={() => console.log("Dark")}>
          CV
        </Button>
      </div>
      <div id="table__data">
        <Grafic />
      </div>
    </div>
  );
}
