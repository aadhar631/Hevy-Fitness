const SettingUnit = () => {
  return (
    <div className='flex flex-col w-[100%] gap-4 border-[1px] border-[#ecedf0] border-l-0 rounded-r-[8px] max-w-[750px] bg-white px-4 pt-[16px] dark:text-white dark:bg-[#1F2022] dark:border-[#42454a]'>
      <div className='flex justify-between items-center'>
        <p className='text-[16px] font-[500]'>Weight Unit</p>

        <select className="selectArrow outline-none border-[1px] border-[#ecedf0] bg-transparent dark:text-white dark:border-[#42454a] rounded-[6px] px-[10px] text-[16px] text-[#111927] h-[35px] mt-2 appearance-none min-w-[150px]" >
          <option value="kg" >kg</option>
          <option value="lbs" >lbs</option>
        </select>
      </div>

      <div className="divider" />

      <div className='flex justify-between items-center'>
        <p className='text-[16px] font-[500]'>Distance Unit</p>

        <select className="selectArrow outline-none border-[1px] border-[#ecedf0] bg-transparent dark:text-white dark:border-[#42454a] rounded-[6px] px-[10px] text-[16px] text-[#111927] h-[35px] mt-2 appearance-none min-w-[150px]" >
          <option value="Last 12 weeks" >miles</option>
          <option value="Year" >kilometers</option>
        </select>
      </div>

      <div className="divider" />
      <div className='flex justify-between items-center'>
        <p className='text-[16px] font-[500]'>Body Measurement Unit</p>

        <select className="selectArrow outline-none border-[1px] border-[#ecedf0] bg-transparent dark:text-white dark:border-[#42454a] rounded-[6px] px-[10px] text-[16px] text-[#111927] h-[35px] mt-2 appearance-none min-w-[150px]" >
          <option value="Last 12 weeks" >cm</option>
          <option value="Year" >inch</option>
        </select>
      </div>

      <div className="divider" />
    </div>
  )
}

export default SettingUnit