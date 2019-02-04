import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class Inspections extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [{
      Header: 'Date',
      accessor:'inspection_date'
    }, {
      Header: 'Grade',
      accessor:'grade'
    }, {
      Header: 'Score',
      accessor:'score'
    }]

    const { inspections } = this.props

    if (this.props.inspections.length > 0) {
      return(
        <>
          <p> Inspections list </p>
          <ReactTable
            data={inspections}
            columns={columns}
            showPagination={false}
            defaultPageSize={5}
          />
        </>
      )
    }
    else {return null}
  }
}

export default Inspections;
