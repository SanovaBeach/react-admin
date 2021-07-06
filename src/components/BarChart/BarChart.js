import React, { useEffect, useState } from 'react';
import './barChart.scss';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const BarChart1 = ({
  title,
  data,
  dataKey,
  xData,
  grid,
  sort,
  setSort,
  handleSort,
}) => {
  return (
    <div className="Bar">
      <div className="Bar_menu">
        <h1 className="Bar_title">{title}</h1>
        <label htmlFor="sort" className="Bar_label">
          Sort By:{' '}
        </label>
        <select name="sort" id="sort" value="" onChange={handleSort}>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart data={data}>
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xData} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={dataKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart1;
