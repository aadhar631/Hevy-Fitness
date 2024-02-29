import { NavLink } from "react-router-dom"
import { BackArrowIcon, DumbleIcon, darkLeftArrowIcon } from "../../assets"
import { Library, RoutineContent } from '../index'
import { useState, useRef, useEffect } from "react"

const CreateRoutine = () => {

  const [isLibrary, setIsLibrary] = useState(false)
  const [routineContent, setRoutineContent] = useState([])

  const lastRoutine = useRef(null)

  const handleRoutineClick = (item) => {
    setRoutineContent([...routineContent, item])
  }
  
  useEffect(() => {
    lastRoutine.current?.scrollIntoView()
  }, [routineContent])

  return (
    <div className="flex w-[100%] justify-center p-[20px] lg:pt-[24px] font-FontOne gap-[24px] text-[#11927] h-[100%]">
      <div className="flex flex-col w-[100%] lg:max-w-[794px] max-w-[700px] px-[3px] overflow-auto hideScrollBar">
        <div className="flex items-center w-[100%] h-[max-content] justify-between mb-[24px]">
          <div className="flex items-center">
            <NavLink to={'/routine'} className={'mr-[16px]'} ><img src={BackArrowIcon} alt="Back" className="dark:hidden" /><img src={darkLeftArrowIcon} alt="Back" className="hidden dark:block" /></NavLink>
            <h1 className="text-[24px] font-[500] dark:text-white">Create Routine</h1>
          </div>
          <button className="text-white bg-[#D1E6FB] dark:bg-[#203B56] px-[16px] h-[35px] flex items-center justify-center rounded-[6px] text-[14px] font-[400]">Save Routine</button>
        </div>
        <h1 className="pb-[8px] font-[500] text-[14px] text-[#111927] dark:text-white">Routine Title</h1>
        <input type="text" className="w-[100%] px-[20px] py-[12px] borderWithBackground dark:bg-[#1F2022] dark:border-[#2d2f32] focus:outline outline-[1.5px] outline-[#1780ea] text-[#111927] mb-[16px]" placeholder="Workout Routine Title" />

        {/* Creating a new routine */}  
        {
          routineContent.length === 0
            ? <div className="w-[100%] flex flex-col items-center justify-center p-[24px] borderWithBackground dark:bg-[#1F2022] dark:border-[#2d2f32] dark:text-white">
              <img src={DumbleIcon} alt="Dumble" className="mb-[20px]" />
              <h1 className="text-[16px] font-[500]" >No Exercises</h1>
              <h1 className="text-[14px] text-[#898f99] text-center">So far, you haven't added any exercises to this routine.</h1>
            </div>
            : routineContent.map((item, index) => (
              <RoutineContent key={index} index={index} item={item} setIsLibrary={setIsLibrary} setRoutineContent={setRoutineContent} />
            ))
        }

        <div ref={lastRoutine} />

        <button onClick={() => setIsLibrary(true)} className="w-[100%] bg-[#1780ea] text-white text-[14px] rounded-[6px] hover:bg-[#056DD7] px-[6px] py-[1px] h-[35px] font-[500] lg:hidden">+ Add Exercise</button>
      </div>
      <Library isLibrary={isLibrary} setIsLibrary={setIsLibrary} handleRoutineClick={handleRoutineClick} />
      {/* <div className="w-[100vw] h-[100vh] bg-black absolute top-0"></div> */}
    </div>
  )
}

export default CreateRoutine