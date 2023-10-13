import "./ProgressBarHeader.css";
function ProgressBarHeader(props) {
  return (
    <table className="progress-bar-table">
        
        <tr className="header">
      {props.progressBarHeader[0].map((header) => (
        <th className="header-element">{header}</th>
      ))}
    </tr>
    <tr className="row">
      {props.progressBarHeader[1].map((header) => (
        <th>{header}</th>
      ))}
    </tr>
    </table>
  );
}
export default ProgressBarHeader;
