import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import '../css/Sidebar.css'



export default function Sidebar() {
    return (
        
        <div className="maninDiv">
            <ul className="p-0 px-4 py-4 text-center"> 
                <li className="p-1.5 bg-gray-200 text-black font-bold font-mono rounded mb-2 shadow-md">İş Arayanlar</li>
                <li className="p-1.5 bg-gray-200 text-black font-bold font-mono rounded mb-2 shadow-md">İş Verenler</li>
                <li className="p-1.5 bg-gray-200 text-black font-bold font-mono rounded mb-2 shadow-md">İş Pozisyonları</li>
                <li className="p-1.5 bg-gray-200 text-black font-bold font-mono rounded mb-2 shadow-md">İş İlanları</li>
            </ul>
        </div>
    )
}


/* 
  <Menu vertical>
                <Menu.Item >
                    <div>
                        <Icon name="user" color="yellow" />
                        <span className="span" >Kullanıcı</span>
                    </div>
                </Menu.Item>
                <Menu.Item >
                    <div>
                        <Icon name="user" />
                        <span className="span">User</span>
                    </div>
                </Menu.Item>
                <Menu.Item >
                    <div style={{padding: "3px"}}>
                        <Icon name="user" />
                        <span className="span" >User</span>
                    </div>
                </Menu.Item>
            </Menu>
*/