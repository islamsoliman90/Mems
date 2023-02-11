import Img from "../img/Troll Face.png";
export default function Header ()
{
  return (
    <header>
      <div className="content">
        <div className="logo">
          <img src={ Img } />
          <h1>Meme Generator</h1>
        </div>
        <div className="right-text">
          <span>React Course - Project 3</span>
        </div>
      </div>
    </header>
  );
}
