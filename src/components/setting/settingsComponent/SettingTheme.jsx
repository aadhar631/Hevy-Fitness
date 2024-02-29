const SettingTheme = ({ setIsDarkMode, status, setStatus }) => {

  setIsDarkMode(status === 'dark' ? true : false)

  return (
    <div className='flex flex-col w-[100%] gap-4 border-[1px] border-[#ecedf0] border-l-0 rounded-r-[8px] max-w-[750px] bg-white px-4 pt-[16px] dark:text-white dark:bg-[#1F2022] dark:border-[#2d2f32]'>
      <div className='flex justify-between items-center'>
        <p className='text-[1rem] font-[500]'>Current Theme</p>
        <select value={status} onChange={e => setStatus(e.target.value)} className="selectArrow outline-none border-[1px] bg-transparent dark:text-white dark:border-[#42454a] border-[#ecedf0] rounded-[6px] px-[10px] text-[16px] text-[#111927] h-[35px] mt-2 appearance-none min-w-[150px]" >
          <option value="light" className="text-black" >👼 Light</option>
          <option value="dark" className="text-black" >😈 Dark</option>
        </select>
      </div>
      <div className="divider" />
    </div>
  )
}

export default SettingTheme