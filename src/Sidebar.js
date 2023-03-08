import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@mui/icons-material/Inbox';

import './Css/Sidebar.css'
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {

  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon />} className="compose_btn" onClick={() => dispatch(openSendMessage())}>
        Compose</Button>
      <Sidebaroptions Icon={<InboxIcon />} title="Inbox" number="224" ></Sidebaroptions>




      <Sidebaroptions startIcon={<AddIcon />} title={"starred"} number={"500"}></Sidebaroptions>
      <Sidebaroptions Icon={<InboxIcon />} title={"snoozed"} number={"300"}></Sidebaroptions>
      <Sidebaroptions Icon={<InboxIcon />} title={"important"} number={"456"}></Sidebaroptions>
      <Sidebaroptions Icon={<InboxIcon />} title={"sent"} number={"300"}></Sidebaroptions>
      <Sidebaroptions Icon={<InboxIcon />} title={"draft"} number={"300"}></Sidebaroptions>
      <Sidebaroptions Icon={<InboxIcon />} title={"catagory"} number={"300"}></Sidebaroptions>
      <Sidebaroptions Icon={<InboxIcon />} title={"[map]/trach"} number={"300"}></Sidebaroptions>
      <Sidebaroptions Icon={<InboxIcon />} title={"documents"} number={"300"}></Sidebaroptions>
      <Sidebaroptions Icon={<InboxIcon />} title={"more"} number={"300"}></Sidebaroptions>

<hr/>
<h3 className='sidebar_heading'>meet</h3>

<Sidebaroptions Icon={<InboxIcon />} title={"now meeting"} number={"300"}></Sidebaroptions>
<Sidebaroptions Icon={<InboxIcon />} title={"join a meeting"} number={"300"}></Sidebaroptions>




    </div>
  )
}

export default Sidebar
