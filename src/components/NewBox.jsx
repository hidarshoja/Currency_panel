import  { useState } from 'react';
import TableBoxNew from './TableBoxNew';
import CreateNewBox from './CreateNewBox';


export default function NewBox() {
  const [activeTab, setActiveTab] = useState('availableBoxes'); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className='flex gap-6 items-center justify-center border-b-2 border-gray-200'>
        <div
          className={`cursor-pointer my-3 mx-0 pb-2 border-b-[3px] ${
            activeTab === 'availableBoxes' ? 'border-p1 text-text1 font-bold' : 'border-transparent text-text2'
          }`}
          onClick={() => handleTabChange('availableBoxes')}
        >
          باکس های موجود
        </div>
        <div
          className={`cursor-pointer my-3 mx-0 pb-2 border-b-[3px] ${
            activeTab === 'createNewBox' ? 'border-p1 text-text1 font-bold' : 'border-transparent text-text2'
          }`}
          onClick={() => handleTabChange('createNewBox')}
        >
          ایجاد باکس جدید
        </div>
      </div>
      <div className='p-4'>
        {activeTab === 'availableBoxes' && (
          <div>
            <TableBoxNew />
          </div>
        )}
        {activeTab === 'createNewBox' && (
          <div> 
            <CreateNewBox />
          </div>
        )}
      </div>
    </div>
  );
}
