import React, { useEffect, useState } from 'react'
import './Css/Emaillist.css'
import Emailbody from './Emailbody'
import Emaillistsetting from './Emaillistsetting'
import Emailtype from './Emailtype'
function Emaillist() {

const[emails,setEmails]=useState([]);

useEffect(()=>{

},[])


    return (
        <div className='emaillist'>
            <Emaillistsetting />
            <Emailtype />


            <Emailbody name="kishoor@gmail.com" subject="this is subject" message="based on react js.based on react jsbased on react jsbased on react jsbased on react jsbased on react jsbased on react js" time="03:30pm"/>
            <Emailbody name="adbr@gmail.com" subject="this is subject" message="based on react js.based on react jsbased on react jsbased on react jsbased on react jsbased on react jsbased on react js" time="03:30pm"/>
            <Emailbody name="kullu@gmail.com" subject="this is subject" message="based on react js.based on react jsbased on react jsbased on react jsbased on react jsbased on react jsbased on react js" time="03:30pm"/>
            <Emailbody name="manu@gmail.com" subject="this is subject" message="based on react js.based on react jsbased on react jsbased on react jsbased on react jsbased on react jsbased on react js" time="03:30pm"/>
            <Emailbody name="sayukr@gmail.com" subject="this is subject" message="based on react js.based on react jsbased on react jsbased on react jsbased on react jsbased on react jsbased on react js" time="03:30pm"/>
            <Emailbody name="karnam@gmail.com" subject="this is subject" message="based on react js.based on react jsbased on react jsbased on react jsbased on react jsbased on react jsbased on react js" time="03:30pm"/>
            <Emailbody name="moroor@gmail.com" subject="this is subject" message="based on react js.based on react jsbased on react jsbased on react jsbased on react jsbased on react jsbased on react js" time="03:30pm"/>



        </div>
    )
}

export default Emaillist
