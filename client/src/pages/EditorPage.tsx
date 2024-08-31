import Splitter from "@/components/Splitter"
import SideBar from "../components/sidebar/SideBar"
import WorkSpace from "@/components/WorkSpace"

 
const EditorPage = () => {
    
  return (
     <Splitter>
      <SideBar/>
      <WorkSpace/>
     </Splitter>
  )
}

export default EditorPage
