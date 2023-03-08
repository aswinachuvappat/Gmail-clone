import React from 'react';
import { useSelector } from 'react-redux';
import Compose from './Compose';
import Emaillist from './Emaillist';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  const isMessageOpen =useSelector(selectSendMessageIsOpen);
  return (
    <div className="App">
     <Header/>

     <div className='app_body'>
     <Sidebar/>
     <Emaillist/>

     </div>
     {
      isMessageOpen && <Compose/>
     }
    </div>
  );
}

export default App;
