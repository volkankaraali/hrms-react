import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Menu, Container,Button, Icon} from 'semantic-ui-react'
import '../css/Navi.css'
import reactDom from 'react-dom';

export default function Navibar() {

    const btn= document.querySelector('button.mobile-menu-button');
    const menu= document.querySelector('mobile-menu-');





    return (
        <nav className="bg-gray-100 max-w-full h-20 ">
            <div className="container flex justify-between ">
                
                <div className="logoMenuDiv flex items-center space-x-6">
                    <a href="" className="flex items-center">
                        <img className="h-20 mr-3 rounded-full" src="https://icon-library.com/images/human-resources-icon-png/human-resources-icon-png-15.jpg" alt="" />
                        <span className="text-yellow-500 font-mono font-bold text-black tracking-widest text-2xl">HRMS</span>
                    </a>

                    <div className="menuDiv space-x-3  hidden md:flex">
                        <a href="" className="text-black font-mono font-bold p-2 rounded bg-gray-200 hover:bg-gray-700 hover:text-white hover:shadow-xl transtion duration-500"><Icon name="home"/> Anasayfa</a>
                        <a href="" className="text-black font-mono font-bold p-2 rounded bg-gray-200 hover:bg-gray-700 hover:text-white transtion duration-500"><Icon name="search"/>İş Ara</a>
                        <a href="" className="text-black font-mono font-bold p-2 rounded bg-gray-200 hover:bg-gray-700 hover:text-white transtion duration-500">Hakkımızda</a>
                    </div>   
                </div>
    
                {/*login and register */}
                <div className="flex items-center space-x-1 hidden md:flex">
                    <a href="" className="py-2 px-3  rounded text-black font-mono font-bold hover:bg-gray-700 hover:text-white transtion duration-500">Giriş</a>
                    <a href="" className="py-2 px-3 bg-yellow-500 rounded text-black font-mono font-bold hover:text-white transtion duration-300">Kayıt</a>
                </div>

                {/* mobile button */}
                <div className=" md:hidden flex items-center">
                    <button className="mobile-menu-button"><Icon size="large" name="sidebar"/></button>
                </div>
            </div>

            {/* mobile link */}
            <div className="mobil-menu hidden">
                mobil menu
            </div>
        </nav>
    )
}



/*


<div className="flex flex-row">

                    brand
                    <div className=" flex flex-row">
                        <img className="h-full rounded-full p-2" src="https://icon-library.com/images/human-resources-icon-png/human-resources-icon-png-15.jpg" alt="" />
                        <div className="flex items-center">
                            <a className="brandName text-black" href="/"><span className="block font-bold tracking-widest text-2xl">HRMS</span></a>
                        </div>

                        menu link
                        
                        <div className="flex items-center ml-5">
                                <span className="px-4 py-1.5 mr-2 bg-blue-100 rounded-md font-bold transtion duration-500 hover:bg-gray-800 hover:text-white"><Icon name="search"/> İş Ara </span>
                                <span className="px-4 py-1.5 mr-2 bg-blue-100 rounded-md font-bold transtion duration-500 hover:bg-gray-800 hover:text-white">Link</span>
                                <span className="px-4 py-1.5 mr-2 bg-blue-100 rounded-md font-bold transtion duration-500 hover:bg-gray-800 hover:text-white">Link </span>
                                <span className="px-4 py-1.5 mr-2 bg-blue-100 rounded-md font-bold transtion duration-500 hover:bg-gray-800 hover:text-white">Link </span>
                        </div>
                    </div>
                </div>











<button className="p-3 mr-4 bg-blue-100 rounded-md font-bold transtion duration-500 hover:bg-gray-800 hover:text-white uppercase">Giriş</button>
                    <button className="p-3 mr-4 bg-blue-100 rounded-md font-bold transtion duration-500 hover:bg-gray-800 hover:text-white uppercase">Kayıt</button>








<Menu size="huge" inverted >
                <Container>
                <Menu.Item>
                    <a className="Brand"  href="/">HRMS</a>
                </Menu.Item>
                <Menu.Item name='upcomingEvents'>
                    <a href="/">İş Ara</a>
                </Menu.Item>
                <Menu.Item position="right">
                <Button.Group >
                    <Button inverted color="yellow">Giris</Button>
                    <Button.Or text=""  />
                    <Button inverted color="green">Kayıt </Button>
                </Button.Group>
                </Menu.Item>
                </Container>
            </Menu>
*/