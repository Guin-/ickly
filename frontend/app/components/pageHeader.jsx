import React from 'react';
import { PageHeader } from  'react-bootstrap';

class TitleHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageHeader>
        Ickly Page Header
      </PageHeader>
    )
  }
}

export default TitleHeader;
