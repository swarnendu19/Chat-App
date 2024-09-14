import SideDrawer from "@/components/SideDrawer/SideDrawer"
import Main from "@/components/Layout/Main"
import Footer from "@/components/Footer/Footer"

 
const EditorPage = () => {
    
  return (
      <div className="flex flex-col w-full h-full">
        <div className="flex h-full ">
          <div className="right w-fit">
            <SideDrawer/>
          </div>
          <div className="flex flex-col justify-between h-full left bg-dark">
            <Main/>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default EditorPage
