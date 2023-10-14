import "./ProgressBarHeader.css";
function ProgressBarHeader(props) {
  
  return (
    <table className="progress-bar-table">
      <tr className="header">
        {props.progressBarHeader.header[0].map((header, index) => (
          <th className="header-element" key={index}>
            {header}
          </th>
        ))}
      </tr>
      <tr className="row">
        {props.progressBarHeader.header[1].map((header, index) => (
          <th
            style={
              index === 0 ? { color: props.progressBarHeader.activeColor } : {  }
            }
          >
            {header}
          </th>
        ))}
      </tr>
    </table>
  );
}
export default ProgressBarHeader;
