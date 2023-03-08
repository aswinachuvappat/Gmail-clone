import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import './Css/Emaillist.css'
import GroupIcon from '@mui/icons-material/Group';
import SellIcon from '@mui/icons-material/Sell';

function Emailtype() {
  return (
    <div class="emailtype">
      <div class="emailtype_options emailtype_options--active">
        <InboxIcon/>
        <p>primary</p>
  </div>

  <div class="emailtype_options">
        <GroupIcon/>
        <p>social</p>
  </div>

  <div class="emailtype_options">
        <SellIcon/>
        <p>promotions</p>
  </div>
    </div>
  )
}

export default Emailtype
