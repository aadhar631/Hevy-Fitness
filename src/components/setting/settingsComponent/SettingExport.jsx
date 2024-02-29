const SettingExport = () => {
  return (
    <div className='flex flex-col items-center w-[100%] gap-4 border-[1px] border-[#ecedf0] border-l-0 rounded-r-[8px] max-w-[750px] bg-white px-4 pt-[16px] dark:text-white dark:bg-[#1F2022] dark:border-[#2d2f32]'>
      <div className='flex flex-col gap-4 text-md font-[500]'>
        <p>Export Workout Data</p>
        <p className='text-[#6C737F] text-[16px]'>Export your entire workout history to a CSV file. Exported workouts data can not be imported back into Hevy</p>
        <div className="divider" />
      </div>
      <div className='flex cursor-pointer w-[13rem] h-[2.2rem] bg-[#1780EA] p-2 rounded-[5px] justify-center items-center mt-[12rem]'>
        <button className='text-white font-[500] text-[.9rem]'>Export Workout Data</button>
      </div>
    </div>
  )
}

export default SettingExport