import "./App.css";
import Header from "./components/header";
import Meme from "./components/Mems";

function App ()
{
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Meme />
      </div>
    </div>
  );
}

export default App;
