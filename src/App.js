import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Narbar from "./components/navBar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Narbar/><br/>
        <Main/><br/>
        <Content></Content><br/>
        <Footer/><br/>
      </header>
    </div>
  );
}

export default App;
