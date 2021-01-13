import React from 'react';
import moment from 'moment';
import {Header} from "../../components";

import "./Weight.style.scss";

class Weight extends React.Component {

  render() {
    return (
      <section className="flex__column height__expand">
        <Header />

        Weight Page
      </section>
    );
  }
}

export default Weight;
