import { profilePhoto } from "../../../assets" 

const SettingProfile = () => {
  return (
    <div className='flex flex-col w-[100%] gap-4 items-center border-[1px] border-[#ecedf0] border-l-0 rounded-r-[8px] max-w-[750px] bg-white dark:text-white dark:bg-[#1F2022] dark:border-[#2d2f32]'>
      <div className='w-[100%] flex flex-col gap-4 pt-10 pb-5 justify-center items-center'>
        <img src={profilePhoto} alt="" className='w-[7rem] h-[7rem] rounded-full object-cover object-top' />

        <p className='text-[#3490ed]'>Change Picture</p>
      </div>

      <div className='flex flex-col gap-4 px-4 w-[100%]'>
        <div className='flex gap-6 items-center'>
          <p className='font-[500]'>Name</p>

          <input type="text" className='px-2 outline-none bg-transparent' />
        </div>

        <div className='divider' />
      </div>

      <div className='flex flex-col gap-4 px-4 w-[100%]'>
        <div className='flex gap-6 items-center'>
          <p>Bio</p>

          <textarea name="bio" className='resize-none h-[1.5rem] outline-none px-2 bg-transparent'></textarea>
        </div>

        <div className='divider' />
      </div>

      <div className='flex w-[20rem] h-[2.2rem] bg-[#1780EA] p-2 rounded-[5px] justify-center items-center mt-2 cursor-pointer'>
        <button className='text-white font-[500]'>Save</button>
      </div>
    </div>
  )
}

export default SettingProfile