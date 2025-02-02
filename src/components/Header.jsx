import React from 'react'
import '../style/Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
  return (
    <>
    <div className="header">
        <GitHubIcon></GitHubIcon>
        <h2>GitHub</h2>
    </div>
    
    </>
  )
}

export default Header
