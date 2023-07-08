import { useState, useEffect } from "react";

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Muestra u oculta el botón según la posición del scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Agrega un listener para el evento scroll cuando el componente se monta
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para desplazarse hacia arriba al hacer clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Renderiza el botón solo si es visible
  return (
    <button
      className={`scroll-button ${isVisible ? "show" : "hide"}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up-from-bracket"></i>
    </button>
  );
};
