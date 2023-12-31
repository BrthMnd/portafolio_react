export function CardContainer() {
  return (
    <div id="card_container" data-aos="fade-right">
      <div className="card">
        <box-icon
          name="network-chart"
          animation="tada-hover"
          size="100px"
        ></box-icon>
        <h4>Team Work</h4>
      </div>
      <div className="card">
        <box-icon name="devices" animation="tada-hover" size="100px"></box-icon>
        <h4>Cross-platform</h4>
      </div>
      <div className="card">
        <box-icon
          name="terminal"
          animation="tada-hover"
          size="100px"
        ></box-icon>
        <h4>Full-Stack</h4>
      </div>
      <div className="card">
        <box-icon name="heart" animation="tada-hover" size="100px"></box-icon>
        <h4>Passion</h4>
      </div>
    </div>
  );
}
