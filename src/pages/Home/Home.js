import React from 'react'
import './home.scss'
import {Chart} from '../../components'
import {overallSalesMonthly} from '../../dummyData'

const Home = () => {
  return (
    <div className='Home'>
      <Chart 
        data={overallSalesMonthly} 
        title='Overall Sales' 
        dataKey='sales'
        xData='month'
        grid
      />
    </div>
  )
}

export default Home