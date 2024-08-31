import { ReactNode } from 'react'
import Split from 'react-split'
 
const Splitter = ({children}:{ children: ReactNode}) => {

  return (
    <Split
    sizes={[25, 75]}
    minSize={100}
    expandToMin={false}
    gutterSize={10}
    gutterAlign="center"
    snapOffset={30}
    dragInterval={1}
    direction="vertical" 
    cursor="col-resize"
    className='flex justify-center items-center h-screen max-w-full overflow-hidden min-h-screen'
    >
      {children}
    </Split>
  )
}

export default Splitter
