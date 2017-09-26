import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import styled from 'styled-components'

const StyledListGroupItem = styled(ListGroupItem)`
  overflow-wrap: break-word;
  white-space: normal;
`

class InspectionsList extends React.Component {
  constructor(props) {
    super(props);
  }

  isExpandableRow(row) {
    if (row.business > 2) return true;
      else return false;
  }

  expandComponent(row) {
    return (
      <div className="col-lg-12">
        <ListGroup>
          <StyledListGroupItem header="Inspection Type">
            {row['inspection_type']}
          </StyledListGroupItem>
          <StyledListGroupItem header="Action">
            {row['action']}
          </StyledListGroupItem>
          <StyledListGroupItem header="Violation Description">
            {row['violation_description'] || 'N/A'}
          </StyledListGroupItem>
          <StyledListGroupItem header="Violation Code">
            {row['violation_code'] || 'N/A'}
          </StyledListGroupItem>
          <StyledListGroupItem header="Critical">
            {row['critical_flag']}
          </StyledListGroupItem>
          <StyledListGroupItem header="Grade Date">
            {row['grade_date'] || 'N/A'}
          </StyledListGroupItem>
        </ListGroup>
      </div>
    )
  }

  sortByDate(a, b) {
    // a is not a string
    // call sort on the array first
    // then pass those results to your current sortbydate function
    return a
//    a = a.split("-").join('');
    b = b.split('-').join('');
//    return a > b ? 1 : a < b ? -1 : 0;
  }

  render() {
    const { inspections } = this.props
    if (this.props.inspections.length > 0) {
      return (
          <div className="container">
            <div className="row">
              <BootstrapTable
                data={inspections}
                expandColumnOptions={ { expandColumnVisible: true } }
                keyField='id'
                expandableRow={this.isExpandableRow.bind(this)}
                expandComponent={this.expandComponent.bind(this)}>
                  <TableHeaderColumn dataField='inspection_date'
                                     dataSort
                                     sortFunc={ this.sortByDate.bind(this) }>
                    Date
                  </TableHeaderColumn>
                  <TableHeaderColumn dataField='grade' dataAlign='right' width='25%'>Grade</TableHeaderColumn>
                  <TableHeaderColumn dataField='score' dataAlign='right' width='25%'>Score</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
      );
    }
    else {return null}
  }
}

InspectionsList.propTypes = {
  inspections: PropTypes.array
}

export default InspectionsList;

