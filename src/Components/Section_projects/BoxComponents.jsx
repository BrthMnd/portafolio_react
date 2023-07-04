// import { Button } from "react-bootstrap";
// import { AlertSwal } from "../../assets/Js/SweetAlert2";
// import { useEffect } from "react";
// import { Alert } from "bootstrap";
import crud from "../../assets/img/crud.png";
import tasktierlist from "../../assets/img/tasktierlist.png";
import portafolio from "../../assets/img/Portafolio.png";

const imagenes = [
  {
    imagen: crud,
    url: "http://",
  },
  {
    imagen: tasktierlist,
  },
  {
    imagen: portafolio,
  },
];
export function BoxComponent() {
  return (
    <section id="section__projects">
      <h1>Projects</h1>
      <div id="container__box">
        {imagenes.map((element) => {
          return (
            <div
              className="box__projects"
              key={element.imagen}
              data-aos="flip-up"
            >
              <img src={element.imagen} alt="" />
              <div className="ventana">
                <i className="fa-solid fa-magnifying-glass-arrow-right"></i>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
