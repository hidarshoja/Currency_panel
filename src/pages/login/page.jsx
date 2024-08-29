import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { changeId } from "../../features/user/userSlice";

export default function Login() {
  const user_id = useSelector(state => state.user.id);
  const dispatch = useDispatch();

  const handleLoginAndChangeId = () => {
    dispatch(changeId(20));
    handleLogin();
  };

  const handleLogin = async (event) => {
    event.preventDefault();  // جلوگیری از رفتار پیش‌فرض فرم
    
    try {
      const formData = new FormData(event.target);

      const postData = {
        email: formData.get('email'),
        password: formData.get('password'),
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
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className='w-full flex flex-col items-center justify-center'>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-text1">
              به حساب خود وارد شوید
            </h2>
            <p className="mt-2 text-sm leading-6 text-text2">
              ثبت نام نکرده اید؟
              <Link to="/auth/register" className="font-semibold px-1 text-p1 hover:text-p2">
                ثبت نام کنید
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-text2">
                    ایمیل
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      dir='ltr'
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 pl-3 py-1.5 shadow-sm ring-1 ring-inset ring-border1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-p1 sm:text-sm sm:leading-6 bg-bg1 text-text2 outline-border1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-text2">
                    پسورد
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      dir='ltr'
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 pl-3 py-1.5 shadow-sm ring-1 ring-inset ring-border1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-p1 sm:text-sm sm:leading-6 bg-bg1 text-text2 outline-border1"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-p1 px-3 py-1.5 text-sm font-semibold leading-6 text-text1 shadow-sm hover:bg-p2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1"
                  >
                    ورود
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden flex-1 lg:block w-1/2 bg-white">
        <div className='w-[70%] flex items-center justify-center'>
          <img
            className="absolute left-1/4 inset-0 h-full w-[70%]"
            src="/img/login1.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
