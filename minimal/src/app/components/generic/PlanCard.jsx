import React from 'react'
import { Tick } from './icon'
import Button from '../core/Button'

function PlanCard({Plan,planName,AnnualPrice,MonthlyPriceAsperYear,MonthlyPrice}) {
  return (
    <div className='flex xl:flex-row flex-col md:gap-5 gap-4 border-2 border-green-600 rounded-lg p-4 md:p-6  plan-card-gradient'>
      <div className='md:flex-1/6'>
        <h4 className='text-shadow-green-500 text-xl mb-2'>{planName}</h4>
        <ul className='space-y-2'>
          {
            Plan.map((item)=>{
              return <li className='flex gap-1 items-center' key={item.title}><Tick />{item.title}</li>
            })
          }
        </ul>
      </div>
      <div className='flex flex-col justify-end xl:items-end items-start md:flex-1/4  md:space-y-3 space-y-2'>
        <span>${MonthlyPrice}/mo</span>
        <span>${AnnualPrice}/annual (${MonthlyPriceAsperYear}/mo)</span>
        <Button variant="primary" label="Book Free Consultation" fullWidth />
      </div>
    </div>
  )
}

export default PlanCard

