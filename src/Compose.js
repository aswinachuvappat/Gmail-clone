import React, { useState } from 'react'
import "./Css/Compose.css"
import MinimizeOutlinedIcon from '@mui/icons-material/MinimizeOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';




function Compose() {

    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const dispatch = useDispatch();
    const formSubmit = (e) => {
          e.preventDefault();

          if(to ===""){
            return alert("to is requied")
          }
          if(subject ===""){
            return alert("subject is requied")
          }
          if(message===""){
            return alert("message is requied")
          }

        //   db.collection("emails").add({
        //     to,
        //     subject,
        //     message,
        //     timestamp : firebase.firestore.FieldValue.serverTimestamp()
        //   });
        //   alert("email sent successfully");

     }


    return (
        <div className='compose'>
            <div className='compose_header'>
                <div className='compose_header_left'>
                    <span>New message</span>
                </div>
                <div className='compose_header_right'>
                    <MinimizeOutlinedIcon />
                    <CloseFullscreenOutlinedIcon />
                    <ClearOutlinedIcon onClick={() => dispatch(closeSendMessage())} />
                </div>

            </div>
            <form onSubmit={formSubmit}>
                <div className='compose_body'>
                    <div className='compose_bodyform'>
                        <input type="email" placeholder='recipents' value={to} onChange={(e) => setTo(e.target.value)}>

                        </input>
                        <input type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)}>

                        </input>
                        <textarea rows="20" onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
                    </div>
                </div>

                <div className='compose_footer'>
                    <div className='compose_footer_left'>
                        <button type='submit'>send <ChevronRightIcon /> </button>
                    </div>
                    <div className='compose_footer_right'>
                        <AddLinkOutlinedIcon></AddLinkOutlinedIcon>
                        <AddReactionOutlinedIcon />
                        <InsertPhotoOutlinedIcon />
                        <MoreVertOutlinedIcon />

                    </div>


                </div>
            </form>

        </div>
    )
}

export default Compose
