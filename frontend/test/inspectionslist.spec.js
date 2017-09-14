import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import InspectionsList from '../app/components/inspectionsList';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


describe('<InspectionsList />', () => {
  it('should render nothing if there are no inspections', () => {
    const wrapper = mount(<InspectionsList />)
    expect(wrapper.find(BootstrapTable)).to.have.length(0)
  });

  it('should render a BootstrapTable with 3 columns if there are inspections', () => {
    const props = {
      inspections : [
        { action: "Violations were cited in the following area(s).",
          business: "50035638",
          critical_flag:"Critical",
          grade: "A",
          grade_date: "2016-09-28",
          id: 131029,
          inspection_date: "2016-09-28",
          inspection_type: "Cycle Inspection / Re-inspection",
          record_date: "2017-03-10",
          score: 12,
          violation_code: "02B",
          violation_description: "Hot food item not held at or above 140Âº F."
        }
      ]
    }
    const wrapper = mount(<InspectionsList {...props} />)
    expect(wrapper.find(BootstrapTable)).to.have.length(1)
    const table = wrapper.find(BootstrapTable)
    expect(table.find(TableHeaderColumn)).to.have.length(3)
  });
});
