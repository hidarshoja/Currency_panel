import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    contactNumber: '',
    email: '',
    firstName: '',
    lastName: '',
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

  const handleRegister = async () => {
    try {
      const postData = {
        contactNumber: formData.contactNumber,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 w-full h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-3 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-1/2" dir='rtl'>
        <div className="mx-auto w-full max-w-[28rem] lg:w-[28rem]">
          <div className='w-full flex flex-col items-center justify-center'>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-text1">
              ثبت نام کنید
            </h2>
            <p className="mt-2 text-sm leading-6 text-text2">
              قبلا ثبت‌نام کرده‌اید؟
              <Link to="/auth/login" className="font-semibold px-1 text-p1 hover:text-p2">
                به حساب خود وارد شوید
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="flex w-full items-center justify-between gap-2">
                  <div className="w-1/2">
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-text2">
                      نام
                    </label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 pr-3 py-1.5 shadow-sm ring-1 ring-inset ring-border1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-p1 sm:text-sm sm:leading-6 bg-bg1 text-text2 outline-border1"
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-text2">
                      نام خانوادگی
                    </label>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 pr-3 py-1.5 shadow-sm ring-1 ring-inset ring-border1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-p1 sm:text-sm sm:leading-6 bg-bg1 text-text2 outline-border1"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex w-full items-center justify-between gap-2">
                  <div className="w-1/2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-text2">
                      ایمیل
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="block w-full rounded-md border-0 pr-3 py-1.5 shadow-sm ring-1 ring-inset ring-border1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-p1 sm:text-sm sm:leading-6 bg-bg1 text-text2 outline-border1"
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-text2">
                      شماره تماس
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="block w-full rounded-md pl-1 border-0 pr-3 py-1.5 shadow-sm ring-1 ring-inset ring-border1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-p1 sm:text-sm sm:leading-6 bg-bg1 text-text2 outline-border1"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex w-full items-center justify-between gap-2">
                  <div className="w-1/2">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-text2">
                      پسورد
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="block w-full rounded-md border-0 pr-3 py-1.5 shadow-sm ring-1 ring-inset ring-border1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-p1 sm:text-sm sm:leading-6 bg-bg1 text-text2 outline-border1"
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-text2">
                      تکرار پسورد
                    </label>
                    <div className="mt-2">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        className="block w-full rounded-md border-0 pr-3 py-1.5 shadow-sm ring-1 ring-inset ring-border1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-p1 sm:text-sm sm:leading-6 bg-bg1 text-text2 outline-border1"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-p1 px-3 py-1.5 text-sm font-semibold leading-6 text-text1 shadow-sm hover:bg-p2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1"
                  >
                    ثبت نام
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden flex-1 lg:block w-1/2 bg-white">
        <div className='w-[90%] flex items-center justify-center'>
          <img
            className="absolute left-1/4 inset-0 h-full w-[90%]"
            src="/img/imgLogin.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
