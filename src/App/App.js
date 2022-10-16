import Aos from "aos";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routing } from "./Routing";
import "../../node_modules/aos/dist/aos.css"; 

function App() {
  Aos.init({
    startEvent: "DOMContentLoaded",
    throttleDelay: 150,
  });
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
