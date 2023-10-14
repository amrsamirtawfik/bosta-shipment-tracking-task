import './PastStatesHeader.css'

function PastStatesHeader(props) {
  return (
    <tr className="past-states-table-header-row">
      {props.list.map((item,index) => (
        <th className='rowElement' key={index}>{item}</th>
      ))}
    </tr>
  );
}
export default PastStatesHeader;
