import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Element, animateScroll as scroll, scroller } from 'react-scroll'

class Inspections extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollTo() {
    scroller.scrollTo('inspection-detail', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 20
    })
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
              onExpandedChange={
                (newExpanded, index, event) => {
                  if(newExpanded[index] !== false) {
                    this.scrollTo()
                  }
                }
              }
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
                  <Element name="inspection-detail">
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
                  </Element>
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
