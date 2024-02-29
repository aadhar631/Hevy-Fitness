import React from 'react'
import DurationChart from "../profile/DurationChart"

const ExerciseChart = (props) => {
    return (
        <div className='flex flex-col pt-6'>
            <p className='text-lg font-[500] pb-4'>{props.name}</p>

            <p className='text-[14px] text-secondTextColor'>{props.desc}</p>

            <h1 className='text-3xl font-[500] mb-6'>{props.number}</h1>

            <DurationChart />
        </div>
    )
}

export default ExerciseChart