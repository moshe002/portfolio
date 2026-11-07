import { useState, useEffect } from "react";
import { useTheme } from "./context/themeContext";
import Header from "./components/Header";
import Body from "./components/Body";
import SplashScreen from "./pages/SplashScreen";

function App() {

  const [renderThis, setRenderThis] = useState<string>('About')
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    const minDisplayTimer = setTimeout(() => {
      setIsAppReady(true);
    }, 2500);

    return () => clearTimeout(minDisplayTimer);
  }, []);

  const { darkMode } = useTheme()

  return (
    <div className={`relative ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      {!isAppReady && (
        <div className={`fixed inset-0 z-50 bg-inherit overflow-hidden`}>
          <SplashScreen showSplashScreen={!isAppReady} />
        </div>
      )}

      <div>
        <Header renderThis={renderThis} setRenderThis={setRenderThis} />
        <Body renderThis={renderThis} />
      </div>
    </div>
  )
}

export default App
