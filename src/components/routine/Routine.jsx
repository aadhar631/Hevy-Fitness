import { NavLink } from "react-router-dom"
import { ActiveRoutineIcon, BigRoutineIcon, FolderIcon } from "../../assets"
import { useState } from "react"

const Routine = () => {

  const [newFolder, setNewFolder] = useState(false) // This useState is created to open folder section

  return (
    <div className="flex w-[100%] justify-center p-[20px] lg:pt-[24px] font-FontOne dark:text-white">
      {
        newFolder && <div onClick={() => setNewFolder(false)} className="w-[100vw] h-screen bg-[#1012134D] z-[95] absolute top-0 left-0 flex items-center justify-center">
          <div onClick={e => e.stopPropagation()} className="p-5 flex flex-col max-w-[350px] w-[100%] borderWithBackground">
            <h1 className="mb-5 text-xl font-[700] text-center" >Create New Folder</h1>
            <input type="text" placeholder="Folder Title" className="px-5 py-3 h-[45px] borderOnly outline-none text-base w-[100%] mb-5" />
            <div className="flex items-center justify-between">
              <button onClick={() => setNewFolder(false)} className="h-[35px] borderOnly px-8 text-[14px] font-[500]">Cancel</button>
              <button onClick={() => setNewFolder(false)} className="h-[35px] borderOnly px-8 text-[14px] bg-[#D1E6FB] text-white font-[500]">Create Folder</button>
            </div>
          </div>
        </div>
      }
      <div className="max-w-[1024px] w-[100%] flex gap-[20px] flex-col lg:flex-row">
        <div className="flex flex-col items-start p-[24px] borderWithBackground dark:border-[#2d2f32] w-[max-content] h-[max-content] dark:bg-[#1F2022]">
          <h1 className="text-[18px] font-[500] pb-[16px]" >My Routines</h1>
          <NavLink to={'/create-routine'} ><button className="flex items-center justify-center w-[280px] h-[45px] borderOnly text-[14px] font-[500] gap-[8px] mb-[16px] hover:bg-[#F9FAFB] dark:hover:bg-transparent dark:border-[#2d2f32]" ><img src={ActiveRoutineIcon} alt="Routine" />New Routine</button></NavLink>
          <button onClick={() => setNewFolder(true)} className="flex items-center justify-center w-[280px] h-[45px] borderOnly text-[14px] font-[500] gap-[8px] hover:bg-[#F9FAFB] dark:hover:bg-transparent dark:border-[#2d2f32]" ><img src={FolderIcon} alt="Routine" />New Folder</button>
        </div>
        <div className="flex flex-col items-center justify-center p-[20px] borderWithBackground h-[60vh] w-[100%] dark:bg-[#1F2022] dark:border-[#2d2f32]">
          <img src={BigRoutineIcon} alt="RoutineIcon" />
          <h1 className="font-[500] text-[18px] my-[16px] mb-[10px]" >Get started</h1>
          <h1 className="font-[500] text-[16px]" >Start by creating a routine!</h1>
        </div>
      </div>
    </div>
  )
}

export default Routine