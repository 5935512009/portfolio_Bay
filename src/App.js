import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import './App.css'
import Narbar from "./components/navBar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Narbar/>
        <Main/>
        <Content></Content><br/>
        <Footer/><br/>
      </header>
    </div>
  );
}

export default App;
