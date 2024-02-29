import { DumbleIcon } from "../../assets"
import { Library, ExerciseRoutineContent } from '../index.js'
import { useEffect, useRef, useState } from "react"

const Exercise = () => {
  const [isLibrary, setIsLibrary] = useState(false)
  const [exerciseRoutineContent, setExerciseRoutineContent] = useState([])

  const lastRoutine = useRef(null)

  const handleExerciseRoutineClick = (item) => {
    setExerciseRoutineContent([item])
  }

  useEffect(() => {
    lastRoutine.current?.scrollIntoView()
  }, [exerciseRoutineContent])

  return (
    <div className="flex w-[100%] justify-center p-[20px] lg:pt-[24px] font-FontOne gap-[24px] text-[#11927] h-[100%]">
      <div className="flex flex-col w-[100%] lg:max-w-[794px] max-w-[694px]">
        <h1 className="text-[24px] font-[500] mb-[16px] dark:text-white">Exercise</h1>
        <button onClick={() => setIsLibrary(true)} className="w-[100%] bg-[#1780ea] text-white text-[14px] rounded-[6px] hover:bg-[#056DD7] px-[6px] py-[1px] h-[45px] font-[500] lg:hidden mb-[16px]">Select Exercise</button>
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center p-[24px] borderWithBackground dark:bg-[#1F2022] dark:text-white dark:border-[#2d2f32]">
          {exerciseRoutineContent.length == 0 ?
            <div className="flex flex-col items-center" >
              <img src={DumbleIcon} alt="Dumble" className="mb-[20px]" />
              <h1 className="text-[16px] font-[500]" >Select Exercises</h1>
              <h1 className="text-[14px] text-[#898f99] text-center">Click on an exercise to see statistics about it.</h1>
            </div>
            :
            <div className="w-[100%] h-[100%] hideScrollBar overflow-y-auto">
              {
                exerciseRoutineContent.length === 0
                  ? <div className="w-[100%] flex flex-col items-center justify-center p-[24px] borderWithBackground">
                    <img src={DumbleIcon} alt="Dumble" className="mb-[20px]" />
                    <h1 className="text-[16px] font-[500]" >No Exercises</h1>
                    <h1 className="text-[14px] text-[#898f99] text-center">So far, you haven't added any exercises to this routine.</h1>
                  </div>
                  : exerciseRoutineContent.map((item, index) => (
                    <ExerciseRoutineContent key={index} item={item} setIsLibrary={setIsLibrary} />
                  ))
              }
            </div>
          }
        </div>
      </div>
      <Library isLibrary={isLibrary} setIsLibrary={setIsLibrary} handleRoutineClick={handleExerciseRoutineClick} />
      {/* <div className="w-[100vw] h-[100vh] bg-black absolute top-0"></div> */}
    </div>
  )
}

export default Exercise