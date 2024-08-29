import  { useState } from 'react';
import { FaBitcoin, FaEthereum, FaDollarSign, FaEuroSign } from 'react-icons/fa';
import { SiRipple, SiLitecoin } from 'react-icons/si';
import toast, { Toaster } from 'react-hot-toast';
import { FiEdit3 } from "react-icons/fi";


let currencies = [
  { name: 'Bitcoin', icon: <FaBitcoin />, exchange: 'Binance', margin: 2, Conditions: [] },
  { name: 'Ethereum', icon: <FaEthereum />, exchange: 'Coinbase', margin: 1.5, Conditions: [] },
  { name: 'Ripple', icon: <SiRipple />, exchange: 'Kraken', margin: 1.8, Conditions: [] },
  { name: 'Litecoin', icon: <SiLitecoin />, exchange: 'Bitfinex', margin: 1.2, Conditions: [] },
  { name: 'USD', icon: <FaDollarSign />, exchange: 'Binance', margin: 0.5, Conditions: [] },
  { name: 'Euro', icon: <FaEuroSign />, exchange: 'Bitstamp', margin: 0.7, Conditions: [] }
];

export default function TableBoxNew() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    exchange: '',
    margin: '',
    Conditions: []
  });

  const handleEditClick = (currency) => {
    setCurrentCurrency(currency);
    setFormData({
      name: currency.name,
      exchange: currency.exchange,
      margin: currency.margin,
      Conditions: currency.Conditions || []
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
        name: '',
        exchange: '',
        margin: '',
        Conditions: []
      });
      toast.error('درخواست لغو شد', {
        position: 'top-right'
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedConditions = [...formData.Conditions];
    if (checked) {
      updatedConditions.push(value);
    } else {
      updatedConditions = updatedConditions.filter((item) => item !== value);
    }
    setFormData({
      ...formData,
      Conditions: updatedConditions
    });
  };

  const handleSave = () => {
    
    currencies = currencies.map((currency) =>
      currency.name === formData.name
        ? { ...currency, exchange: formData.exchange, margin: formData.margin, Conditions: formData.Conditions }
        : currency
    );
    toast.success('درخواست با موفقیت ثبت و ارسال شد', {
        position: 'top-right'
      });
    console.log('Updated currencies:', currencies);
    setIsModalOpen(false);
  };

  return (
    <div>
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
                          نوع
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-text2">
                          نام صرافی
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-text2">
                          مارجین
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-text2">
                          #
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border2">
                      {currencies.map((currency) => (
                        <tr key={currency.name} className='text-text1'>
                          <td className="whitespace-nowrap py-4 text-center text-sm font-medium">
                            <div className="flex items-center gap-2 justify-start">
                                <span className='w-1/3'></span>
                               
                              <span className='text-p1 text-xl'>
                              {currency.icon}
                              </span>
                              <span>{currency.name}</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm ">
                            {currency.exchange}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm ">
                            {currency.margin}%
                          </td>
                          <td className="relative whitespace-nowrap py-4 text-center text-sm font-medium">
                            <button
                              onClick={() => handleEditClick(currency)}
                              className="text-green1 text-xl hover:text-indigo-300"
                            >
                              <FiEdit3 />
                            </button>
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

      {/* Modal */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-gray-900 bg-opacity-40 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-bg3 p-8 rounded-lg shadow-lg w-11/12 md:w-2/4 max-w-4xl">
              <h2 className="text-lg font-bold text-text1 text-center mb-4">ویرایش ارز</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-text2 mb-1">نام ارز</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border1 rounded-md bg-bg1 text-text2 outline-border1"
                    
                  />
                </div>
                <div>
                  <label className="block text-text2 mb-1">نام صرافی</label>
                  <input
                    type="text"
                    name="exchange"
                    value={formData.exchange}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border1 rounded-md bg-bg1 text-text2 outline-border1"
                  />
                </div>
                <div>
                  <label className="block text-text2 mb-1">مارجین به (%)</label>
                  <input
                    type="number"
                    name="margin"
                    value={formData.margin}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border1 rounded-md bg-bg1 text-text2 outline-border1"
                  />
                </div>
                <div>
                  <label className="block text-text2 mb-1">شروط</label>
                  <div className="flex items-center gap-3 flex-wrap ">
                    {['temp', 'timeUp', 'timeStart', 'rsi', 'rap'].map((condition) => (
                      <div key={condition} className='flex items-center gap-1'>
                        <input
                          type="checkbox"
                          id={`condition-${condition}`}
                          value={condition}
                          checked={formData.Conditions.includes(condition)}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor={`condition-${condition}`} className="text-text2">
                          {condition}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-x-4 space-x-4">
                <button
                  onClick={handleCloseModal}
                   className="px-4 py-2 border-2 border-border1 w-[150px] text-text1 rounded-md"
                >
                  لغو
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-p1 w-[150px] text-text1 rounded-md"
                >
                  ذخیره و ارسال
                </button>
              </div>
            </div>
          </div>
        </>
      )}
       <Toaster position="top-left" />
    </div>
  );
}
