import './PastStatesHeader.css'

function PastStatesHeader(props) {
  return (
    <tr className="past-states-table-header-row">
      {props.list.map((item) => (
        <th className='rowElement'>{item}</th>
      ))}
    </tr>
  );
}
export default PastStatesHeader;
