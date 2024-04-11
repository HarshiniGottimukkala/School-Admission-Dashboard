import React from 'react'
import './Finance.scss'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Finance = () => {

    const data = [
        {
            "name": "MON",
            "This Week": 90,
            "Last Week": 70
        },
        {
            "name": "TUE",
            "This Week": 43,
            "Last Week": 55
        },
        {
            "name": "WED",
            "This Week": 38,
            "Last Week": 30
        },
        {
            "name": "THU",
            "This Week": 50,
            "Last Week": 39
        },
        {
            "name": "FRI",
            "This Week": 30,
            "Last Week": 20
        },
        {
            "name": "SAT",
            "This Week": 65,
            "Last Week": 82
        },
        {
            "name": "SUN",
            "This Week": 70,
            "Last Week": 55
        }
    ];

    const RoundedBar = (props) => {
        const { x, y, width, height } = props;
        return (
            <g>
                <path d={`M${x},${y + height} 
                          a${width / 1},${width / 8} 0 0 1 ${width},0
                          v${-height}
                          a${width / 2},${width / 2} 0 0 0 ${-width},0
                          Z`} fill={props.fill} />
            </g>
        );
    };
    const barWidth = 10;

    return (
        <div className="bar-chart">
            <h1>School Finance</h1>

            <div className="barchart-content">
                <BarChart width={400} height={300} data={data} >
                    <CartesianGrid stroke="#C1BBEB" strokeDasharray="none" />
                    <XAxis dataKey="name" stroke="#C1BBEB" />
                    <YAxis stroke="#C1BBEB" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Last Week" fill="#4D44B5" shape={<RoundedBar />} barSize={barWidth} />
                    <Bar dataKey="This Week" fill="#FB7D5B" shape={<RoundedBar />} barSize={barWidth} />
                </BarChart>
            </div>
        </div>
    );
}

export default Finance