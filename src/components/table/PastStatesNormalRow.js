import "./PastStatesNormalRow.css";
function PastStatesNormalRow(props) {
  return (
    <tr className="normal-row">
      {props.list.map((item) => (
        <td className="rowElement" key={props.key}>
          {item}
          {/*rowElement css is in PastStatesHeader.css */}
        </td>
      ))}
    </tr>
  );
}
export default PastStatesNormalRow;
