import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
  Legend,
  ResponsiveContainer
} from "recharts";

import './SchoolPerformance.scss';

const data = [
  {
    name: "JAN",
    "This Week": 1000,
    "Last Week": 2000,
    amt: 2400
  },
  {
    name: "FEB",
    "This Week": 4500,
    "Last Week": 3000,
    amt: 2210
  },
  {
    name: "MAR",
    "This Week": 8000,
    "Last Week": 4900,
    amt: 2290
  },
  {
    name: "APR",
    "This Week": 2000,
    "Last Week": 2500,
    amt: 2000
  },
  {
    name: "MAY",
    "This Week": 1000,
    "Last Week": 5000,
    amt: 2181
  },
  {
    name: "JUN",
    "This Week": 2000,
    "Last Week": 3000,
    amt: 2500
  },
  {
    name: "JUL",
    "This Week": 4005,
    "Last Week": 5000,
    amt: 2100
  },
  {
    name: "AUG",
    "This Week": 3000,
    "Last Week": 2700,
    amt: 2100
  },
  {
    name: "SEPT",
    "This Week": 2500,
    "Last Week": 2000,
    amt: 2100
  },
  {
    name: "OCT",
    "This Week": 5000,
    "Last Week": 4700,
    amt: 2100
  },
  {
    name: "NOV",
    "This Week": 7300,
    "Last Week": 9000,
    amt: 2100
  },
  {
    name: "DEC",
    "This Week": 6000,
    "Last Week": 5000,
    amt: 2100
  },
];


const SchoolPerformance = () => {

  return (
    <div className="line-graph">
      <div className="line-chart">
        <div className="heading">
          <h1>School Performance</h1>
        </div>
        <div className="linechart-content">
          <AreaChart
            width={1000}
            height={300}
            data={data}
            syncId="anyId"
          >
            <CartesianGrid stroke="#C1BBEB" strokeDasharray="none" horizontal={false} />
            <XAxis stroke="#C1BBEB" dataKey="name" axisLine={false} />
            <YAxis stroke="#C1BBEB" />
            <Tooltip />
            <Area type="monotone" dataKey="Last Week" stroke="#FB7D5B" fill="#FB7D5B" strokeWidth={4} fillOpacity={0.1} />
            <Area type="monotone" dataKey="This Week" stroke="#4D44B5" fill="#4D44B5" strokeWidth={4} fillOpacity={0.1} />
          </AreaChart>
        </div>
      </div>
    </div>

  );
}

export default SchoolPerformance