import { ExerciseChart } from '../index'

const ExerciseRoutineContent = ({item}) => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex justify-between exercise-header'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <h1 className='text-2xl font-[500]'>{item.name}</h1>
                    </div>

                    <div className='flex flex-col font-[400] text-[.9rem]'>
                        <div className='flex gap-1'>
                            <p>Equipment:</p>
                            <p className='text-secondTextColor'>{item.equipment}</p>
                        </div>

                        <div className='flex gap-1'>
                            <p>Primary Muscle Group:</p>
                            <p className='text-secondTextColor'>{item.type}</p>
                        </div>
                    </div>
                </div>

                <div className='borderOnly rounded-[10px] w-[20rem] h-[13rem] overflow-hidden flex justify-center exercise-image'>
                    <img src={item.img} alt="" className=''/>
                </div>
            </div>

            <div className='light-border h-[1px]'></div>


            <div className='flex justify-between'>
                <p className='text-lg font-[500]'>Statistics</p>

                <div className='flex gap-4 items-center text-[#1780ea] border-[1px] rounded-[5px] text-[1.1rem]'>
                    <select onChange={e => handleFilterDataTwo(e.target.value)} className="selectArrow outline-none borderOnly px-[10px] py-[7px] text-[16px] text-[#111927] h-[40px] appearance-none w-[225px] bg-[#F9FAFB] hover:border-[#00000055] focus:border-[1.5px] focus:border-[#1780ea]" >
                        <option value="Last 12 weeks" >Last 12 weeks</option>
                        <option value="Year" >Year</option>
                        <option value="All time" >All time</option>
                    </select>
                </div>
            </div>


            <div className='flex flex-col pt-6'>
                <ExerciseChart name={"Weight"} desc={"Heaviest Weight"} number={"8 kg"}/>
                <ExerciseChart name={"One Rep Max"} desc={"Best One Rep Max"} number={"12.3 kg"}/>
                <ExerciseChart name={"Set Volume"} desc={"Best Set Volume"} number={"128 kg"}/>
            </div>
        </div>
    )
}

export default ExerciseRoutineContent