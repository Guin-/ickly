import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class Inspections extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [{
      expander: true
    }, {
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
          <div className="col-lg-10 offset-lg-1">
            <ReactTable
              data={inspections}
              columns={columns}
              showPagination={false}
              pageSize={inspections.length}
              defaultPageSize={10}
              SubComponent={ (row) =>{
                return(
                  <div>
                  <ListGroup>
                    <ListGroupItem>
                      <ListGroupItemHeading>Inspection Type</ListGroupItemHeading>
                        {row['original']['inspection_type']}
                      <ListGroupItemText>
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Action</ListGroupItemHeading>
                      <ListGroupItemText>
                        {row['original']['action']}
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Violation Description</ListGroupItemHeading>
                      <ListGroupItemText>
                        {row['original']['violation_description'] || 'N/A'}
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Violation Code</ListGroupItemHeading>
                      <ListGroupItemText>
                        {row['original']['violation_code'] || 'N/A'}
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Critical Flag</ListGroupItemHeading>
                      <ListGroupItemText>
                        {row['original']['critical_flag']}
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Grade Date</ListGroupItemHeading>
                      <ListGroupItemText>
                        {row['original']['grade_date'] || 'N/A'}
                      </ListGroupItemText>
                    </ListGroupItem>
                  </ListGroup>
                  </div>
                );
              }}
            />
          </div>
        </>
      )
    }
    else {return null}
  }
}

export default Inspections;
