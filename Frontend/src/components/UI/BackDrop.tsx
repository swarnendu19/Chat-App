import React from "react";
import ReactDOM from "react-dom";


interface BackDropProps {
    onClick: Function;
}

const BackDrop : React.FC<BackDropProps> = ({onClick}) => {

    const content  = (
        <div 
        className="w-screen h-screen z-10 fixed bg-black top-0 left-0 bg-opacity-70"
        onClick={()=> onClick()}
        ></div>
    )
    const overlay = document.getElementById("bacldrop-hook");
  return overlay ? ReactDOM.createPortal(content, overlay) : null;
}

export default BackDrop
