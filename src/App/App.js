import { BrowserRouter } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Routing } from "./Routing";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header/>
        <Routing />
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
