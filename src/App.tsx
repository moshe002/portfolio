import { useState } from 'react'

import Header from "./components/Header"
import Body from './components/Body'

function App() {

  const [renderThis, setRenderThis] = useState<string>('About')

  return (
    <div>
      <Header setRenderThis={setRenderThis} />
      <Body renderThis={renderThis} />
    </div>
  )
}

export default App
