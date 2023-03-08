import React from 'react'
import './Css/Emaillist.css'
import { IconButton } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Emaillistsetting() {
    return (
        <div className='emaillist_setting'>

            <div className='el_left'>
                <IconButton><CheckBoxOutlineBlankIcon /></IconButton>
                <IconButton><ArrowDropDownIcon /></IconButton>
                <IconButton><RefreshIcon /></IconButton>
                <IconButton><MoreVertIcon /></IconButton>
            </div>


            <div className='el_right'>
                <p>1-50 of 30,000</p>
                <IconButton><ChevronLeftIcon /></IconButton>
                <IconButton>< KeyboardArrowRightIcon/></IconButton>

            </div>


        </div>
    )
}

export default Emaillistsetting
