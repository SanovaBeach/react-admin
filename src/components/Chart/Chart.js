import React from 'react'
import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Chart = ({title, data, dataKey, grid, xData }) => {
  return (
    <div className='Chart'>
      <h1 className="Chart_title">{title}</h1>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart
          data={data}
        >
          <XAxis dataKey={xData} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
          {grid && <CartesianGrid stroke='#e0dfdf' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart