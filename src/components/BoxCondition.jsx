import React from 'react';
import { FaBitcoin, FaEthereum, FaDollarSign, FaEuroSign } from 'react-icons/fa';
import { SiRipple, SiLitecoin } from "react-icons/si";
import { Link } from 'react-router-dom';

export default function BoxCondition() {
  const currencies = [
    {
      name: 'Bitcoin',
      icon: <FaBitcoin />,
      volumePercentage: 35,
      exchangeName: 'Binance',
      margin: 2
    },
    {
      name: 'Ethereum',
      icon: <FaEthereum />,
      volumePercentage: 25,
      exchangeName: 'Coinbase',
      margin: 1.5
    },
    {
      name: 'Ripple',
      icon: <SiRipple />,
      volumePercentage: 20,
      exchangeName: 'Kraken',
      margin: 1.8
    },
    {
      name: 'Litecoin',
      icon: <SiLitecoin />,
      volumePercentage: 10,
      exchangeName: 'Bitfinex',
      margin: 1.2
    },
    {
      name: 'USD',
      icon: <FaDollarSign />,
      volumePercentage: 5,
      exchangeName: 'Binance',
      margin: 0.5
    },
    {
      name: 'Euro',
      icon: <FaEuroSign />,
      volumePercentage: 5,
      exchangeName: 'Bitstamp',
      margin: 0.7
    }
  ];

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          
          <p className="mt-4 text-xl font-semibold leading-8 text-text1">
           نوع ارز و صرافی را براساس حجم و نام صرافی  انتخاب کنید . 
          </p>
        </div>
        {/* <div className="flex items-center justify-center mt-6">
          
             <Link to="/auth/login" className='py-2 rounded-lg px-8 bg-p1 text-center'>ورود</Link>
            </div> */}
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {currencies.map((currency) => (
            <li key={currency.name} className="rounded-2xl border border-border2 bg-bg3 px-8 py-10 cursor-pointer hover:shadow-md">
              <div className="flex justify-center items-center mx-auto h-48 w-48 rounded-full bg-text2 md:h-32 md:w-32">
                <span className="text-6xl text-p1">{currency.icon}</span>
              </div>
              <div className='mt-6 flex w-full items-center justify-between'>
                <p className='text-text2'>نام و نوع ارز :</p>
                <p className=" text-base font-semibold leading-7 tracking-tight text-text1">{currency.name}
              </p>
              </div>
              <div className='mt-6 flex w-full items-center justify-between'>
                <p className='text-text2'>  نام صرافی  :</p>
                <p className="text-sm leading-6 text-text1"> {currency.exchangeName}</p>
              </div>
              <div className='mt-6 flex w-full items-center justify-between'>
                <p className='text-text2'> حجم درگیر  :</p>
                <p className="text-sm leading-6 text-text1"> {currency.volumePercentage}%</p>
              </div>
              <div className='mt-6 flex w-full items-center justify-between'>
                <p className='text-text2'>  مارجین در حال انجام  :</p>
                <p className="text-sm leading-6 text-text1">{currency.margin}%</p>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
