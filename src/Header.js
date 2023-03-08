

import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton,Avatar} from '@mui/material';
import { width } from '@mui/system';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import './Css/header.css'
function Header() {
    return (
        <div className='header'>

            <div className='header_left'>
                <IconButton>
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img width={30} src='https://i.postimg.cc/0NRhSDFk/gmail-logo.jpg' alt='Logo'></img>
            </div>

            <div className='header_middle'>
                <div className='search_mail'>
                    <IconButton>
                        <SearchSharpIcon></SearchSharpIcon>
                    </IconButton>
                    <input type="text" placeholder='search Mail'  />
                    <IconButton>
                        <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                </div>

            </div>

            <div className='header_right'>
                <IconButton>
                    <HelpOutlineIcon></HelpOutlineIcon>
                </IconButton>
                <IconButton>
                    <SettingsIcon></SettingsIcon>

                </IconButton>
                <IconButton>
                    <AppsIcon></AppsIcon>
                </IconButton>
<Avatar src='https://i.pinimg.com/originals/5d/e8/e3/5de8e312ed4219ae81528bc17ff3081b.jpg'></Avatar>
            </div>
        </div>

    )
}

export default Header
