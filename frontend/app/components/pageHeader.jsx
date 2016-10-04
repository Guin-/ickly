import React from 'react';
import { PageHeader } from  'react-bootstrap';

class TitleHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageHeader>
        Ickly Page Header Hot Reloaded!
      </PageHeader>
    )
  }
}

export default TitleHeader;
