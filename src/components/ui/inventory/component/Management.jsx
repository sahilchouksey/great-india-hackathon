import React from 'react'
import Stock from './Stock'
import Overview from './Overview'
import BestSelling from './BestSelling'
import './Management.css';
const category="Laptops"
const persentage=30
function Management() {
  
  return (
  <div className='management'>
    <div className='header'>
      <h3 className='heading'>Inventory Management </h3>
      <div className='yellow button'>Manage Your Inventory</div>
    </div>
    <div className='Stocks'>
      <div><Stock category={category} persentage={persentage}></Stock></div>
      <div><Stock category={category} persentage={persentage}></Stock></div>
      <div><Stock category={category} persentage={persentage}></Stock></div>
      <div><Stock category={category} persentage={persentage}></Stock></div>
      <div><Stock category={category} persentage={persentage}></Stock></div>
      <div><Stock category={category} persentage={persentage}></Stock></div>

    </div>
    <div style={{margin:"5px -0px"}}>
        <Overview title='OVERVIEW' sales={8888} totalProfit={10000} revenue={9999}></Overview>
        <BestSelling title='Best Selling Products'></BestSelling>

    </div>
  </div>
  )
}

export default Management