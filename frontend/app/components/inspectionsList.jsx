import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';

/*
class BSTable extends React.Component {
  render() {
    const { data } = this.props
    if (this.props.data) {
      return (
        <BootstrapTable data={data} keyField='inspection_date'>
          <TableHeaderColumn dataField='violation_description'>Violation Description</TableHeaderColumn>
          <TableHeaderColumn dataField='inspection_date'>Inspection Date</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}
*/

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
      <div>
        <ListGroup>
          <ListGroupItem header="Inspection Type">
             {row['inspection_type']}
          </ListGroupItem>
          <ListGroupItem header="Action">
            {row['action']}
          </ListGroupItem>
          <ListGroupItem header="Violation Description">
            {row['violation_description']}
          </ListGroupItem>
          <ListGroupItem header="Violation Code">
            {row['violation_code']}
          </ListGroupItem>
          <ListGroupItem header="Critical">
            {row['critical_flag']}
          </ListGroupItem>
          <ListGroupItem header="Grade Date">
            {row['grade_date'] || 'N/A'}
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }

  render() {
    const { inspections } = this.props
    if (this.props.inspections) {
      return (
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xs-12">
              <Panel header="Inspections">
              <BootstrapTable
                data={inspections}
                expandColumnOptions={ { expandColumnVisible: true } }
                keyField='inspection_date'
                expandableRow={this.isExpandableRow.bind(this)}
                expandComponent={this.expandComponent.bind(this)}>
                  <TableHeaderColumn dataField='inspection_date'>Inspection Date </TableHeaderColumn>
                  <TableHeaderColumn dataField='grade' dataAlign='right' width='25%'>Grade</TableHeaderColumn>
                  <TableHeaderColumn dataField='score' dataAlign='right' width='25%'>Score</TableHeaderColumn>
              </BootstrapTable>
              </Panel>
              </div>
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


/*
  expandComponent(row) {
    const { inspections } = this.props
    return (
      <BootstrapTable keyField='violation_description' data={inspections}>
        <TableHeaderColumn dataField='violation_description'> Violation Description</TableHeaderColumn>
      </BootstrapTable>
    )
  }
*/
