import { useState } from "react";
import "./FileNavigation.css";
import { GoPlus } from "react-icons/go";
import BackDrop from "../UI/BackDrop";
import FileContainer from "./FileContainer";
 
const FileNavigation = () => {
     const [fileSettings, setFileSettings] = useState(false);
     const showFileSetting = ()=>{
      setFileSettings(true);
     }
     const hideFileSetting = ()=>{
      setFileSettings(false);

     }
     const addFileHandler = () => {};

     return (
      <>
       {
        fileSettings && <BackDrop onClick={hideFileSetting}/>
       }
       <div className="pt-2 w-full bg-slate-700 flex items-end gap-2">
        <FileContainer/>
        <div className="flex item-start my-1 mr-2">
          <button
            className="rounded-full overflow-hidden hover:bg-gray-500 p-1"
            onClick={() => {
              showFileSetting();
              addFileHandler();
            }}
          >
            <GoPlus className="text-xl  duration-300 text-white " />
          </button>
        </div>
       </div>
      </>
     )
};

export default FileNavigation;