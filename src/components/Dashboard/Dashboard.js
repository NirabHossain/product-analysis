import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Label, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Text, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setData(data));
    }, []);

    return (
        <div className='d-md-grid mt-5 charts container'>

            <div>
                <h5 className='text-center text-primary'>Sell per month </h5>
                <LineChart title="This" width={350} height={250} data={data} >
                    <Text>Month</Text>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month"></XAxis>

                    <YAxis />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>

            <div>
                <h5 className='text-center text-primary'>Investment vs Revenue </h5>
                <AreaChart width={350} height={250} data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Area type="monotone" stackId="a" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" stackId="a" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
            <div>
                <h5 className='text-center text-primary'>Investment vs Revenue  </h5>

                <BarChart width={350} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                <h5 className='text-center text-primary'>Investment vs Revenue  </h5>

                <PieChart width={400} height={250}>
                    <Pie data={data} stackId="a" dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} stackId="a" dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;