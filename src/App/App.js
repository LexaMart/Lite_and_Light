import Aos from "aos";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routing } from "./Routing";

function App() {
  Aos.init();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
