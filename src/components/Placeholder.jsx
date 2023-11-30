import "../styles/App.css";
import logo from "../Untitled_Artwork.png";

const Placeholder = () => {
  return (
    <div id="placeholder-background">
      <div className="container flex-center">
        <div className="row">
          <div className="col">
            <img id="placeholder-img" src={logo} width="300px" alt="" />
          </div>
          <h1 id="placeholder-title">Website currently under construction</h1>
        </div>
      </div>
    </div>
  )
}

export default Placeholder;