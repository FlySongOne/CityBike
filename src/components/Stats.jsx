import { Chart } from 'react-google-charts';

import React from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Calories Burned By Riders This Year, 2017',
        hAxis: { title: 'Month', minValue: 0, maxValue: 200000000 },
        vAxis: { title: 'Total Calories' },
      },
      data: [
        ['Month','Total Calories Burned by Riders'],
        ['January', 64254720],
        ['February',79514040],
        ['March',   69106760],
        ['April',  137086040],
        ['May',    152159240],
        ['June',   165048280],
        ['July',   169371160],
        ['August', 174411680],
      ],
      options2: {
        title: 'Carbon Offset By Riders In Pounds This Year, 2017',
        colors: ['gold'],
        hAxis: { title: 'Month', minValue: 0, maxValue: 2500000 },
        vAxis: { title: 'Total Carbon Offset' },

      },
      data2:[
        ['Month','Total Carbon Offset by Riders',{ role: 'style' }],
        ['January', 835311 ,'gold'],
        ['February',1033683,'gold'],
        ['March',   898388, 'gold'],
        ['April',  1782119,'gold'],
        ['May',    1978070,'gold'],
        ['June',   2145628,'gold'],
        ['July',   2201825,'gold'],
        ['August', 2267352,'gold'],
      ],

    };
  }

  render() {
    return (
   <div>
    <hr></hr>
      <h1>Environmental Impact</h1>
      <div className="carloriesChart">
      <Chart
        graph_id="ColumnChart"
        chartType="ColumnChart"
        data={this.state.data}
        width="100%"
        height="400px"
        options={this.state.options}
      />
      </div>
      <div className='calories'>
      <h4>Calories burned per ride = Total number of calories burned / total number of rides </h4>
      <p>January: 64,254,720 / 723,261 = 88.8 calories burned per ride</p>
      <p>February: 79,514,040 / 783,664 = 101.5 calories burned per ride</p>
      <p>March: 69,106,760 / 799,955 = 86.4 calories burned per ride</p>
      <p>April: 137,086,040 / 1,315,380 = 104.2 calories burned per ride</p>
      <p>May: 152,159,240 / 1,523,247 = 99.9 calories burned per ride</p>
      <p>June: 165,048,280 / 1,731,150 = 95.34 calories burned per ride</p>
      <p>July: 169,371,160 / 1,735,628 = 97.58 calories burned per ride</p>
      <p>August: 174,411,680 / 1,816,383 = 96.02 calories burned per ride</p>
      <h5>The total numbers of calories burned by riders are provided by Citi Bike</h5>
      </div>
    <div className="carbonOffsetChart">
      <Chart
        graph_id="ColumnChart2"
        chartType="ColumnChart"
        data={this.state.data2}
        width="100%"
        height="400px"
        options={this.state.options2}
      />
    </div>
    <div>
    <h4>Carbon offset per ride = Total Carbon Offset in pounds / total number of rides</h4>
    <p>January: 853,311 / 723,261 = 1.15 pounds of carbon offset per ride</p>
    <p>February: 1,033,683 / 783,261 = 1.32 pounds of carbon offset per ride</p>
    <p>March: 898,388 / 799,955 = 1.12 pounds of carbon offset per ride</p>
    <p>April: 1,782,119 / 1,315,380 = 1.35 pounds of carbon offset per ride</p>
    <p>May: 1,978,070 / 1,523,247 = 1.29 pounds of carbon offset per ride</p>
    <p>June: 2,145,628 / 1,731,150 = 1.24 pounds of carbon offset per ride</p>
    <p>July: 2,201,825 / 1,735,628 = 1.27 pounds of carbon offset per ride</p>
    <p>August: 2,267,352 / 1,816,383 = 1.25 pounds of carbon offset per ride</p>
    <h5>The total carbon offset calculation is conducted by Citi Bike according to the 2012 MTA
    Sustainability Report</h5>
    </div>
  </div>
    );
  }
}

export default Stats;

