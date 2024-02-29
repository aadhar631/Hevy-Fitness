import { useEffect, useState } from "react"
import { AddIcon, CrossMenuIcon, SearchBtn, SearchCross } from "../../assets"
import exerciseData from '../../Data/ExerciseData.json'

const Library = ({ isLibrary, setIsLibrary, handleRoutineClick }) => {

  const [inputvalue, setInputvalue] = useState('')

  const [newData, setNewData] = useState(exerciseData)

  const handleFilterData = (filterType) => {
    if (filterType === 'all muscles') {
      setNewData(exerciseData)
      return;
    }
    const filteredData = exerciseData.filter(exerciseData => exerciseData.type.toLowerCase() === filterType.toLowerCase())
    setNewData(filteredData)
  }

  const handleFilterDataTwo = (filterType) => {
    if (filterType === 'All Equipment') {
      setNewData(exerciseData)
      return;
    }
    const filteredData = exerciseData.filter(exerciseData => exerciseData.equipment.toLowerCase() === filterType.toLowerCase())
    setNewData(filteredData)
  }

  useEffect(() => {
    if (inputvalue === '') {
      setNewData(exerciseData)
      return;
    } else {
      const filteredData = exerciseData.filter(exerciseData => exerciseData.name.toLowerCase().startsWith(inputvalue.toLowerCase()))
      setNewData(filteredData)
    }
  }, [inputvalue])

  return (
    <div className="">
      {isLibrary && <div onClick={() => setIsLibrary(false)} className="w-[100vw] h-screen bg-[#1012134D] z-[95] absolute lg:hidden top-0 left-0"></div>}
      <div className={`${isLibrary ? 'flex' : 'hidden lg:flex'} lg:min-w-[330px] lg:max-w-[330px] w-[60%] min-w-[300px] lg:h-[100%] h-[80vh] borderWithBackground libraryResponsive flex-col z-[98] dark:bg-[#1F2022] dark:text-white dark:border-[#2d2f32]`}>
      <div className="p-[16px] pb-0 flex flex-col">
        <div className="mb-[16px] flex items-center justify-between w-[100%]">
          <h1 className="text-[18px] font-[500] hidden lg:block">Library</h1>
          <h1 className="text-[18px] font-[500] block lg:hidden">Select Exercise</h1>
          <button className="text-[14px] text-[#1780EA] p-[8px] hidden lg:block">+ Custom Exercise</button>
          <button onClick={() => setIsLibrary(false)} className="text-[14px] text-[#1780EA] p-[8px] block lg:hidden"><img src={CrossMenuIcon} alt="close" /></button>
        </div>
        <select onChange={e => handleFilterDataTwo(e.target.value)} className="selectArrow dark:bg-[#1F2022] dark:border-[#2d2f32] dark:text-white outline-none borderOnly px-[10px] py-[7px] text-[16px] text-[#111927] h-[40px] appearance-none" >
          <option value="All Equipment" >All Equipment</option>
          <option value="None" >None</option>
          <option value="Barbell" >Barbell</option>
          <option value="Dumbbell" >Dumbbell</option>
          <option value="Kettlebell" >Kettlebell</option>
          <option value="Machine" >Machine</option>
          <option value="Plate" >Plate</option>
          <option value="Resistance Band" >Resistance Band</option>
          <option value="Suspension" >Suspension</option>
          <option value="Other" >Other</option>
        </select>
        <select onChange={e => handleFilterData(e.target.value)} className="selectArrow dark:bg-[#1F2022] dark:border-[#2d2f32] dark:text-white outline-none borderOnly px-[10px] py-[7px] text-[16px] text-[#111927] h-[40px] mt-2 appearance-none">
          <option value="all muscles">All Muscles</option>
          <option value="abdominals">Abdominals</option>
          <option value="abductors">Abductors</option>
          <option value="adductors">Adductors</option>
          <option value="biceps">Biceps</option>
          <option value="lower back">Lower Back</option>
          <option value="upper back">Upper Back</option>
          <option value="cardio">Cardio</option>
          <option value="chest">Chest</option>
          <option value="calves">Calves</option>
          <option value="forearms">Forearms</option>
          <option value="glutes">Glutes</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="lats">Lats</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="shoulders">Shoulders</option>
          <option value="triceps">Triceps</option>
          <option value="traps">Traps</option>
          <option value="neck">Neck</option>
          <option value="full body">Full Body</option>
          <option value="other">Other</option>
        </select>
        <div className="input_search flex h-[45px] px-[5px] bg-[#F3F4F6] dark:bg-[#1F2022] dark:border-[1.1px] dark:border-[#2d2f32] items-center rounded-[6px] mt-2">
          <div className="w-[40px] flex items-center justify-center cursor-pointer" ><img src={SearchBtn} alt="search" /></div>
          <input value={inputvalue} onChange={e => setInputvalue(e.target.value)} type="text" placeholder="Search Exercises" className="bg-transparent w-full px-[2px] py-[1px] font-FontOne text-[16px] outline-none" />
          <div onClick={() => setInputvalue('')} className={`w-[40px] items-center justify-center cursor-pointer ${inputvalue ? 'flex' : 'hidden'}`} ><img src={SearchCross} alt="search" /></div>
        </div>
      </div>
      <div className="w-[100%] h-[1px] mt-4 bg-[#ecedf0] dark:bg-[#2d2f32]"></div>
      <div className="w-[100%] mt-4 overflow-y-auto">
        <h1 className="text-[16px] font-[500] ml-4 mb-4 text-[#6C737F] dark:text-white" >All Exercises</h1>
        {
          newData.map((item) => (
            <div onClick={() => (handleRoutineClick(item), setIsLibrary(false))} key={item.id} className="flex items-center p-2 cursor-pointer hover:bg-[#f9fafb] dark:hover:bg-[#292B2F]">
              <img src={AddIcon} alt="add" className="mx-2" />
              <img src={item.img} alt="img" className="h-[50px] w-[50px] border-[1px] border-[#ecedf0] rounded-full mr-2" />
              <div className="flex flex-col items-start">
                <h1 className="text-[14px] font-[500] text-[#111927] dark:text-white" >{item.name}</h1>
                <h1 className="text-[14px] font-[400] text-[#898F99] capitalize" >{item.type}</h1>
              </div>
            </div>
          ))
        }

        {
          newData.length === 0
          &&
          <div className="w-[100%] p-4 flex flex-col items-center">
            <h1 className="text-center mt-4 mb-2 text-[16px] font-[500] text-[#111927]" >Can't find {inputvalue || 'this exercise'}</h1>
            <h1 className="text-center text-[14px] font-[500] text-[#111927]" >We don't have that exercise in our database yet.</h1>
          </div>
        }
      </div>
    </div>
    </div>
  )
}

export default Library