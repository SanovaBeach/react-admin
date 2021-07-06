import React, {useState, useEffect} from 'react'
import './product.scss'
import {BarChart} from '../../components'
import {productSales} from '../../dummyData'
import {topSales, lowSales} from '../../helpers/sorts'



const Product = () => {
  const [sort, setSort] = useState('highest')


  useEffect(()=> {
    if(sort === 'lowest') {
      lowSales(productSales)
    } else {
      topSales(productSales)
    }
  }, [sort, productSales])

  const handleSort = (event) => {
    setSort(event.target.value)
  }

  return (
    <div className='Product'>
      <BarChart
        data={productSales}
        title='Top Product Sales'
        xData='name'
        dataKey='sales'
        grid
        sort={sort}
        setSort={setSort}
        handleSort={handleSort}
      />
    </div>
  )
}

export default Product