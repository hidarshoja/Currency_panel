import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Password() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveNew = () => {
    if (formData.password === formData.confirmPassword) {
      toast.success('رمز عبور با موفقیت تغییر یافت', {
        position: 'top-left',
      });
    } else {
      toast.error('رمز عبور و تکرار آن باید یکسان باشند', {
        position: 'top-left',
      });
    }
  };

  const handleCancelBtn = () => {
    setFormData({
      password: '',
      confirmPassword: '',
    });
    toast.info('عملیات لغو شد', {
      position: 'top-left',
    });
  };

  return (
    <div>
      <p className="py-6 font-medium text-text2">پنل مدیریت /  <span className="text-text1">پسورد</span></p>
      <div className="flex justify-center">
        <div className="bg-bg2 p-8 rounded-lg shadow-md w-full sm:w-3/5 border border-bg3 max-w-4xl">
          <h2 className="text-lg font-bold text-text1 text-center mb-4">تغییر رمز ورود</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-text2 mb-1">پسورد</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border1 rounded-md bg-bg1 text-text2 outline-border1"
              />
            </div>
            <div>
              <label className="block text-text2 mb-1">تکرار پسورد</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border1 rounded-md bg-bg1 text-text2 outline-border1"
              />
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
    </div>
  );
}
