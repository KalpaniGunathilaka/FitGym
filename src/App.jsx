import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return <Home dark={dark} setDark={setDark} />;
}

export default App;