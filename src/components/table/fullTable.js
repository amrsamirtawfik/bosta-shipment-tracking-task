import PastStatesHeader from "./PastStatesHeader";
import PastStatesNormalRow from "./PastStatesNormalRow";
import "./fullTable.css";

function FullTable(props) {
  console.log(props.tableData);
  return (
    <table className="past-states-table" >
      <PastStatesHeader list={props.headerList} />
      {props.tableData.map((row,index) => (
        
        <PastStatesNormalRow list={row} key={index}/>
      ))}
    </table>
  );
}

export default FullTable;
