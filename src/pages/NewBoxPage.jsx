import React from 'react'
import NewBox from '../components/NewBox'

export default function NewBoxPage() {
  return (
    <div>
      <p className="py-6 font-medium text-text2">پنل مدیریت /  <span className="text-text1">ساخت باکس جدید</span></p>
      <NewBox />
    </div>
  )
}
