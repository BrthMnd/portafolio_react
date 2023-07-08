import logo from "../../assets/img/LogoBQ_Black.png";
export function FooterComponets() {
  return (
    <>
      <footer id="section__footer">
        {/* left ◀️ */}
        <div id="Logo_diseno">
          <img src={logo} alt="LOGO" id="logo" />
        </div>
        {/* right ▶️ */}
        <div id="Icons_copy">
          <div id="icons">
            <a href="https://twitter.com/brandbvth">
              <i className="fa-brands fa-twitter i"></i>
            </a>
            <a href="https://www.linkedin.com/in/brandon-quintero-developer/">
              <i className="fa-brands fa-linkedin-in i"></i>
            </a>
          </div>
          <div id="copyrigth">
            <p>© - 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
}
