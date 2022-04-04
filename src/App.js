import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouElement from "./router";
import { Provider } from "react-redux";
import store from "./store"
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <RouElement />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
