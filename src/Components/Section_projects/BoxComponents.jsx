import { AlertSwal } from "../../assets/Js/SweetAlert2";
import { imagenes } from "./Object_IMG";
// Component
export function BoxComponent() {
  let duration = 1000;
  const handledClick = (imagen) => {
    console.log(imagen);
    AlertSwal(imagen);
  };

  return (
    <section id="section__projects">
      <h1>Projects</h1>
      <div id="container__box">
        {imagenes.map((element) => {
          duration += 1000;
          return (
            <div
              className="box__projects"
              key={element.imagen}
              data-aos="fade-up"
              data-aos-duration={duration}
            >
              <img src={element.imagen} alt="" />
              <div className="ventana" onClick={() => handledClick(element)}>
                <i className="fa-solid fa-magnifying-glass-arrow-right"></i>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
