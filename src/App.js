import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import RouElement from "./router";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <RouElement/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
