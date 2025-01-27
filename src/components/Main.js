import React from "react";
import {ReactComponent as Logo} from "../img/UP_logo_light_background.svg";

const Main = () => {
  return (
    <div className="main-area-front">
      <div className="main-text">
        <h1 className="h1-dance">
          Dan<span className="ce">ce</span>
        </h1>
        <h1 className="h1-move">
          Mo<span className="ves">ves</span>
        </h1>
      </div>
      <div className="logo">
      <Logo />
      </div>
    </div>
  );
  
};

export default Main;
