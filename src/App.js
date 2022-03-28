import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
