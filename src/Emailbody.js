import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import './Css/Emaillist.css'

function Emailbody({name,subject,message,time}){
    return (
        <div className='emailbody'>
            <div className='emailbody_left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelOutlinedIcon />

                <h4>{name}</h4>
            </div>

            <div className='emailbody_middle'>
                <div className='emailbody_middle_msg'>
          <p><b>{subject}</b> {message}</p>
                </div>

            </div>


            <div className='emailbody_right'>
                <p>
                    {time}
                </p>

            </div>


        </div>
    )
}

export default Emailbody
