import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Header} from "../../components";
import {DEFAULT_GOALS, DONE, PAGE} from "../../config/variables";

import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

/*const dataSet = [
  {
    columns: ["Task", "Time Spend", "Status"],
    data: [
      ["Johnson", 30000, "Male"],
      ["Monika", 355000, "Female"],
      ["Konstantina", 20000, "Female"],
      ["John", 250000, "Male"],
      ["Josef", 450500, "Male"],
    ]
  },
  {
    ySteps: 5, //will put space of 5 rows,
    columns: ["Weight", "Page", "Time Spend"],
    data: [
      ["", "Finance"],
      ["", "IT"],
      ["", "IT Billing"],
      ["", "HR"],
      ["", "Testing"],
    ]
  }
];*/

class Report extends React.Component {
  state = {
    dataSet: [
      {
        columns: [],
        data: []
      }
    ]
  };

  componentDidMount() {
    const {general} = this.props;
    const goals = Object.keys(general).filter(key => DEFAULT_GOALS.includes(key));
    const tasksData = goals.map((key, index) => {
      const incorrect = general[key].logs.filter(log => log.page !== "home" && log.page !== "report").length;

      return [
        key,
        general[key].timeSpend.toFixed(1),
        general[key].state,
        general[key].state === DONE ? incorrect - 1 : incorrect
      ]
    });
    const taskHeader = ["Task", "Time Spend (ms)", "Status", "Incorrect Action"];
    const tasks = {columns: taskHeader, data: tasksData};

    const logs = goals.map((key, index) => {
      return {
        ySteps: 5,
        columns: [key, "Page", "Time Spend (ms)"],
        data: general[key].logs.map(log => {
          return ["", log.page, log.timeSpend.toFixed(1)]
        })
      }
    });
    this.setState({dataSet: [tasks, ...logs]});
  }

  render() {
    return (
      <section className="flex__column height__expand">
        <Header onBack={() => this.props.history.push(PAGE.HOME.VALUE)} title="گزارش" />
        <div className="padding__vertical__50 text__center">
          <ExcelFile element={<button className="button__primary padding__vertical__5 padding__horizontal__10">دانلود گزارش</button>}>
            <ExcelSheet dataSet={this.state.dataSet} name="Report" />
          </ExcelFile>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  general: state.general,
});

export default connect(mapStateToProps)(withRouter(Report));
