import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (message, type = 'success') => {
  if (type === 'success') {
    toast.success(message, { position: 'top-left' });
  } else {
    toast.error(message, { position: 'top-left' });
  }
};

export default function CreateNewBox() {
  const [formData, setFormData] = useState({
    name: '',
    exchange: '',
    margin: '',
    Conditions: []
  });

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

  const handleSaveNew = () => {
    console.log('Saved data:', formData);
    showToast('درخواست با موفقیت ثبت و ارسال شد');
  };

  const handleCancelBtn = () => {
    setFormData({
      name: '',
      exchange: '',
      margin: '',
      Conditions: []
    });
    showToast('درخواست لغو شد', 'error');
  };

  return (
    <div className="flex justify-center">
      <div className="bg-bg2 p-8 rounded-lg shadow-md w-3/5 border border-bg3 max-w-4xl">
        <h2 className="text-lg font-bold text-text1 text-center mb-4">ایجاد باکس جدید</h2>
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
            <div className="flex items-center gap-3 flex-wrap">
              {['temp', 'timeUp', 'timeStart', 'rsi', 'rap'].map((condition) => (
                <div key={condition} className="flex items-center gap-1">
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
        <div className="mt-6 flex justify-end gap-x-4">
          <button
            onClick={handleCancelBtn}
            className="px-4 py-2 border-2 border-border1 w-[150px] text-text1 rounded-md"
          >
            لغو
          </button>
          <button
            onClick={handleSaveNew}
            className="px-4 py-2 bg-p1 w-[150px] text-text1 rounded-md"
          >
            ذخیره و ارسال
          </button>
        </div>
      </div>
      <ToastContainer position="top-left" />
    </div>
  );
}
