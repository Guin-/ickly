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
                const violations = row['original']['violations']
                const formattedViolations = violations.map((violation) => {
                          return(
                            <li key={violation.code + row['original']['inspection_date']}>
                              <p>{violation.code} - {violation.description}</p>
                            </li>
                          )
                })
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
                      <ListGroupItemHeading>Violations</ListGroupItemHeading>
                      <ul id="violations-list">
                        {formattedViolations || 'No Violations Found'}
                      </ul>
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
