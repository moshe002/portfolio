import { useState, useEffect } from "react";
import { useTheme } from "./context/themeContext";
import Header from "./components/Header";
import Body from "./components/Body";
import SplashScreen from "./pages/SplashScreen";

function App() {

  const [renderThis, setRenderThis] = useState<string>('About')
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2500);

    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    }
  }, []);

  const { darkMode } = useTheme()

  return (
    <div className={`${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      {isMounted ? (
        <SplashScreen showSplashScreen={showSplashScreen} />
      ) : (
        <div className={`${showSplashScreen ? 'opacity-0' : 'opacity-100'}`}>
          <Header renderThis={renderThis} setRenderThis={setRenderThis} />
          <Body renderThis={renderThis} />
        </div>
      )}
    </div>
  )
}

export default App
