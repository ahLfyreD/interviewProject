import { useEffect, useState } from 'react'

import './Header.css'

const Header = () => {
  const [headTitle, setHeadTitle] = useState('')

  // Used URL constructor to extract the name of the given route to assign to the header title

  const currentURL = new URL(location)
  
  // using useEffect hook to stop page from re-rendering bug
  useEffect(() => {
   
      if (currentURL.pathname === '/') {
        setHeadTitle('Dashboard')
      } else {
        setHeadTitle(currentURL.pathname)
      }
      console.log(currentURL.pathname)
  }, [])




  return (
    <div className='header'>
      <div>
        <h3 style={{ fontSize: '20px', color: '#45464E', fontWeight: 500, fontFamily: 'poppins' }}>{headTitle}</h3>
      </div>

    </div>
  )
}

export default Header
