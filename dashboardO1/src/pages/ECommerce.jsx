import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { StateContextProvider } from '../context/StateContext'

function ECommerce() {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
            <div className='flex items-center justify-between'>
                <div>
                  <p className='font-semibold'>Earnings</p>
                  <p className='text-2xl'>$63,448.78</p>
                </div>
            </div>
            <div className='mt-6'>
              <Button
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
              size='md'
              />
            </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center items-center gap-1'>
          {earningData.map((item) => (
            <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md-56 p-4 pt-9 rounded-2xl'>
              <button type='button' className='text-2xl opacity-0.9 rounded-full p-3' style={{color: item.iconColor, background: item.iconBg}}>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className='text-sm tex-gray-300 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
          <p className='font-semibold text-xl'>Revenue Update</p>
          <div className='flex items-center gap-4'>
            <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
              <span><GoDotFill /></span>
              <span>Expense</span>
            </p>
            <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
              <span><GoDotFill /></span>
              <span>Budget</span>
            </p>
          </div>
          </div>
          <div className='flex mt-10 gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 cursor-pointer hover:drop-shadow-xl rounded-full text-white bg-green-300 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-400 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$43,438</span>
                  </p>
                <p className='text-gray-400 mt-1'>Expense</p>
              </div>
              <div className='mt-5 bg-pink-300'>
                <SparkLine
                currentColor='blue'
                id='line-sparkline'
                type='Line'
                height='80px'
                width='100px'
                data={SparklineAreaData}
                color='blue'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ECommerce