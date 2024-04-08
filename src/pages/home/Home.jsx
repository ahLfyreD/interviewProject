import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import SideBar from '../../components/sidebar/SideBar'
import Header from '../../components/header/Header'

import './Home.css'
const Home = () => {
    const [homeTitle, setHomeTitle] = useState('')
    
    console.log(homeTitle)

    return (
        <div className='homepage_container'>
            <SideBar setHomeTitle={setHomeTitle}/>
            <div className='container_content'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Home
