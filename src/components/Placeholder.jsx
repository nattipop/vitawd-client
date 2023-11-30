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
          <div className="col" id="placeholder-title">
            <h1>Website currently under construction</h1>
            <h3>Call (715) 642-1146 with any questions</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placeholder;