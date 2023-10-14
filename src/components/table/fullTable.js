import React, { useState } from 'react';
import PastStatesHeader from './PastStatesHeader';
import PastStatesNormalRow from './PastStatesNormalRow';
import './fullTable.css';

function FullTable(props) {
  const [seeMore, setSeeMore] = useState(false);

  const displayRows = seeMore ? props.tableData : props.tableData.slice(0, 4);

  return (
    <div className="full-table-container">
      <table className="past-states-table">
        <PastStatesHeader list={props.headerList} />
        {displayRows.map((row, index) => (
          <PastStatesNormalRow list={row} key={index} />
        ))}
      </table>
      {props.tableData.length > 4 && (
        <button
          className="see-more-button"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
}

export default FullTable;
