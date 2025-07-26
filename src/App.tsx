import { useState } from "react";
import { useTheme } from "./context/themeContext";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {

  const [renderThis, setRenderThis] = useState<string>('About')

  const { darkMode } = useTheme()

  return (
    <div className={`${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
      <Header renderThis={renderThis} setRenderThis={setRenderThis} />
      <Body renderThis={renderThis} />
    </div>
  )
}

export default App
