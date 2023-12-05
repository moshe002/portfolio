import { useState } from 'react'
//import { DarkModeProvider } from './context/themeContext'

import Header from "./components/Header"
import Body from './components/Body'

function App() {

  const [renderThis, setRenderThis] = useState<string>('About')

  //<DarkModeProvider>
  //</DarkModeProvider>

  return (
    <div>
      <Header renderThis={renderThis} setRenderThis={setRenderThis} />
      <Body renderThis={renderThis} />
    </div>
  )
}

export default App
