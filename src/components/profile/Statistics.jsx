import { useState } from 'react'
import { RepsChart, DurationChart } from '../index'

const Statistics = () => {
    const [selectedOption, setSelectedOption] = useState('Duration');
    const [duration, setDuration] = useState("7h 13min");
    const [reps, setReps] = useState("732 reps");

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='flex flex-col borderOnly w-[60%] rounded-[10px] pt-6 gap-5 statistics-chart bg-transparent bg-[#1F2022] dark:border-[#2d2f32] dark:text-white'>
            <div className='px-1 mx-6'>
                <p className='font-medium text-lg'>Statistics</p>
            </div>

            <div className=''>
                <div className='flex mx-6'>
                    <p
                        className={`text-[.9rem] font-medium p-1 h-[2.5rem] ${
                        selectedOption === 'Duration' ? 'text-[#1780ea] border-b-[3px] border-[#1780ea]' : 'text-secondTextColor'
                        } cursor-pointer`}
                        onClick={() => handleOptionClick('Duration')}
                    >
                        Duration
                    </p>

                    <p
                        className={`text-[.9rem] font-medium p-1 h-[2.5rem] ${
                        selectedOption === 'Reps' ? 'text-[#1780ea] border-b-[3px] border-[#1780ea]' : 'text-secondTextColor'
                        } cursor-pointer ml-4`}
                        onClick={() => handleOptionClick('Reps')}
                    >
                        Reps
                    </p>
                </div>

                <div className='divider'></div>
            </div>

            <div className='flex justify-between px-6'>
                <div className='flex gap-2 items-center relative'>
                    <h1 className='text-2xl font-medium'>{selectedOption == "Duration" ? duration : reps}</h1>
                    <p className='text-[.9rem] absolute bottom-0 right-[-5rem]'>This week</p>
                </div>

                <div className='flex gap-4 items-center text-[.9rem] text-[#1780ea]'>
                    <select onChange={e => handleFilterDataTwo(e.target.value)} className="selectArrow outline-none px-[10px] py-[7px] text-[14px] h-[40px] appearance-none w-[150px] bg-transparent focus:border-[1.5px] text-[#6280EA]" >
                        <option value="Last 12 weeks" >Last 12 weeks</option>
                        <option value="Year" >Year</option>
                        <option value="All time" >All time</option>
                    </select>
                </div>
            </div>

            <div className='mr-6 mb-0'>
                {selectedOption == "Duration" ? <DurationChart /> : <RepsChart />}
            </div>
        </div>
    )
}

export default Statistics