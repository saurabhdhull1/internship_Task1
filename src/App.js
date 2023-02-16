import "./App.css";
import Footer from "./components/Navbar/Footer/Footer";
import Main from "./components/Navbar/main/Main";
import Navbar from "./components/Navbar/navbar/Navbar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
      <a href="#topImg" className="GoToTop">
        <img src="gallary/up-arrow-svgrepo-com.svg" alt="" />
      </a>
    </div>
  );
}

export default App;
