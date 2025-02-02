import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import './style/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('Light');
  const handleTheme = ()=>{
    if(theme=='Light'){
      setTheme('Dark');
    }
    else{
      setTheme('Light');
    }
  }

  return (
    <div className={theme=='Light'?'wholeWhite':'WholeBlack'}>
    <Header/>
    <div className="themeDiv"><button onClick= {handleTheme} className="themeBtn"><b>{theme}</b>
    </button></div>
     <Body/>
    </div>
  )
}

export default App
