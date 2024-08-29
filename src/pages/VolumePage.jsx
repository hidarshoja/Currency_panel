


let currencies = [
  {numberBox : "Box1" ,name: 'Bitcoin', exchange: 'Binance', margin: 2 },
  {numberBox : "Box12" ,name: 'Ethereum', exchange: 'Coinbase', margin: 1.5 },
  {numberBox : "Box2" ,name: 'Ripple', exchange: 'Kraken', margin: 1.8 },
  {numberBox : "BoxC12" ,name: 'Litecoin', exchange: 'Bitfinex', margin: 1.2 },
  {numberBox : "BoxC16" ,name: 'USD', exchange: 'Binance', margin: 0.5 },
  {numberBox : "BoxA12" ,name: 'Euro', exchange: 'Bitstamp', margin: 0.7 }
];

export default function VolumePage() {
  
  return (
    <div>
      <p className="py-6 font-medium text-text2">پنل مدیریت /  <span className="text-text1">حجم ها</span></p>
      <div className="mx-auto max-w-7xl">
        <div className="bg-bg2 rounded-md border border-bg3 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-border1">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3.5 text-center text-sm font-semibold text-text2">
                          شماره
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-text2">
                          نام صرافی
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-text2">
                          نوع کارنسی
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-text2">
                          حجم 
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border2">
                      {currencies.map((currency , index) => (
                        <tr key={index} className='text-text1'>
                          <td className="whitespace-nowrap py-4 text-center text-sm font-medium">
                            <div className="flex items-center gap-2 justify-center">
                              
                              <span>{currency.numberBox}</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm ">
                            {currency.exchange}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm ">
                            {currency.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm ">
                            {currency.margin}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
       
    </div>
  )
}
