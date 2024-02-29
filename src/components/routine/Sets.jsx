import { CrossMenuIcon } from "../../assets"

const Sets = ({ index, setSets }) => {

  const handleDeleteSet = (index) => {
    setSets((prevSets) => prevSets.filter((_, i) => i !== index))
  }

  return (
    <div className={`flex w-[100%] justify-between py-1 mb-1 items-center px-2 ${index % 2 !== 0 && 'bg-[#F3F4F6] dark:bg-[#191A1C]'}`}>
      <div className="h-[30px] w-[30px] borderWithBackground rounded-[4px] flex items-center justify-center bg-transparent dark:border-[#2d2f32] dark:bg-[#1F2022]">{index + 1}</div>
      <input className="h-[40px] max-w-[80px] text-center min-w-[10px] borderOnly flex items-center justify-center outline-none px-5 py-3 bg-transparent dark:border-[#2d2f32] dark:bg-[#1F2022]" />
      <input className="h-[40px] max-w-[80px] text-center min-w-[10px] borderOnly flex items-center justify-center outline-none px-5 py-3 bg-transparent dark:border-[#2d2f32] dark:bg-[#1F2022]" />
      <div className="flex items-center mt-1">
        <img onClick={() => handleDeleteSet(index)} src={CrossMenuIcon} alt="Delete" className="cursor-pointer pb-[6px]" />
      </div>
    </div>
  )
}

export default Sets