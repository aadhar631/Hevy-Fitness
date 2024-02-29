import {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function CalendarDemo() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <div className='flex flex-col borderOnly rounded-[10px] px-6 pt-6 dark:bg-[#1F2022] dark:border-[#2d2f32] dark:text-white'>
      <h1 className='font-medium text-lg'>Calendar</h1>

      <Calendar 
        value={dateState}
        onChange={changeDate}
        />
    </div>
  )
}