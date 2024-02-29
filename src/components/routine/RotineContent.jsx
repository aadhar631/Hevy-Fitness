import { useState } from "react"
import { CrossMenuIcon, MoveIcon, ThreeDotIcon } from "../../assets"
import { Sets } from '../index'

const RotineContent = ({ item, index, setRoutineContent }) => {

  const [sets, setSets] = useState([1])
  const [showDelete, setShowDelete] = useState(false)

  const handleDeleteRoutine = (index) => {
    setRoutineContent((prevRoutine) => prevRoutine.filter((_, i) => i !== index))
  }

  return (
    <div className="w-[100%] flex flex-col p-[24px] borderWithBackground mb-6 fade-in dark:bg-[#1F2022] dark:border-[#2d2f32] dark:text-white">
      <div className="flex justify-between w-[100%] relative">
        <div className="flex items-center">
          <img src={MoveIcon} alt="move" className="mr-6 cursor-grab" />
          <img src={item.img} alt="img" className="h-[50px] w-[50px] border-[1px] border-[#ecedf0] rounded-full mr-2" />
          <h1 className="text-[18px] font-[500] text-[#111927] ml-2 dark:text-white" >{item.name}</h1>
        </div>
        <img onClick={() => setShowDelete(!showDelete)} src={ThreeDotIcon} alt="Menu" className="cursor-pointer" />
        <div onClick={() => handleDeleteRoutine(index)} className={`cursor-pointer items-center z-99 absolute -right-2 -bottom-10 bg-white border-[1px] border-[#ecedf0] py-2 pr-7 shadow-sm px-4 rounded-[6px] hover:bg-[#EBEBEB] ${showDelete ? 'flex fade-in' : 'hidden'}`}>
          <img src={CrossMenuIcon} alt="delete" />
          <h1 className="ml-2 text[16px] font-[500] text-[#898F99]" >Remove Exercise</h1>
        </div>
      </div>
      <h1 className="w-[100%] mt-4 mb-2 text-[14px] font-[500]" >Note</h1>
      <textarea cols="30" rows="2" placeholder="Add pinned note" className="resize-y w-[100%] pt-4 px-4 borderOnly bg-transparent dark:border-[#2d2f32] outline-none text-[16px]"></textarea>
      <h1 className="w-[100%] mt-4 mb-2 text-[14px] font-[500]" >Reset Timer:</h1>
      <select className="selectArrow outline-none borderOnly px-[10px] py-[7px] text-[16px] text-[#111927] dark:text-[#808080] h-[40px] appearance-none w-[225px] bg-[#F9FAFB] dark:bg-transparent dark:border-[#2d2f32]" >
        <option value="Off">Off</option>
        <option value="00:05">00:05</option>
        <option value="00:10">00:10</option>
        <option value="00:15">00:15</option>
        <option value="00:20">00:20</option>
        <option value="00:25">00:25</option>
        <option value="00:30">00:30</option>
        <option value="00:35">00:35</option>
        <option value="00:40">00:40</option>
        <option value="00:45">00:45</option>
        <option value="00:50">00:50</option>
        <option value="00:55">00:55</option>
        <option value="01:00">01:00</option>
        <option value="01:05">01:05</option>
        <option value="01:10">01:10</option>
        <option value="01:10">01:10</option>
        <option value="01:15">01:15</option>
        <option value="01:20">01:20</option>
        <option value="01:25">01:25</option>
        <option value="01:30">01:30</option>
        <option value="01:35">01:35</option>
        <option value="01:40">01:40</option>
        <option value="01:45">01:45</option>
        <option value="01:50">01:50</option>
        <option value="01:55">01:55</option>
        <option value="02:00">02:00</option>
        <option value="02:15">02:15</option>
        <option value="02:30">02:30</option>
        <option value="02:45">02:45</option>
        <option value="03:00">03:00</option>
        <option value="03:15">03:15</option>
        <option value="03:30">03:30</option>
        <option value="03:45">03:45</option>
        <option value="04:00">04:00</option>
        <option value="04:15">04:15</option>
        <option value="04:30">04:30</option>
        <option value="04:45">04:45</option>
        <option value="05:00">05:00</option>
      </select>
      <div className="flex justify-between w-[70%] px-[12px]">
        <h1 className="dark:text-white text-[12px] text-[#6C737F] font-[500] mt-4 mb-4" >SET</h1>
        <h1 className="dark:text-white text-[12px] text-[#6C737F] font-[500] mt-4 mb-3 -ml-[20px]" >KG</h1>
        <h1 className="dark:text-white text-[12px] text-[#6C737F] font-[500] mt-4 mb-3" >REPS</h1>
      </div>
      {
        sets.map((_, index) => (
          <Sets key={index} index={index} setSets={setSets} />
        ))
      }
      <button onClick={() => setSets([...sets, 1])} className="w-[100%] text-[14px] px-[6px] py-[1px] h-[40px] font-[500] mt-[16px] borderOnly dark:bg-[#2D2F32] dark:border-none">+ Add set</button>
    </div>
  )
}

export default RotineContent