const SettingAccount = () => {
    return (
        <div className='flex flex-col w-[100%] gap-4 items-center border-[1px] border-[#ecedf0] border-l-0 rounded-r-[8px] max-w-[750px] bg-white p-4 dark:text-white dark:bg-[#1F2022] dark:border-[#42454a]'>
            <div className='flex flex-col'>
                <div className='flex justify-between pt-1'>
                    <p className='text-[16px] font-[500]'>Private Profile</p>

                    <select className="selectArrow outline-none border-[1px] border-[#ecedf0] bg-transparent dark:text-white dark:border-[#42454a] rounded-[6px] px-[10px] text-[16px] text-[#111927] h-[30px] mt-2 appearance-none min-w-[100px]" >
                        <option value="on" >Off</option>
                        <option value="off" >On</option>
                    </select>
                </div>

                <p className='text-[#6C737F] text-4 font-[550] my-4'>Having a private profile means other users need to request to follow you. Only if you accept their follow request, will they be able to see your workouts.</p>

                <div className="divider" />
            </div>

            <div className='flex flex-col gap-4 items-start w-full'>
                <div className='flex flex-col gap-4'>
                    <p className='text-lg font-[500]'>Current Password</p>

                    <div className=''>
                        <input type="password" className='w-[20rem] h-[2.3rem] rounded-[5px] bg-[#f3f4f6] dark:bg-[#384250] outline-none px-2 py-1' />
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-lg font-[500]'>New Password</p>

                    <div className=''>
                        <input type="password" className='w-[20rem] h-[2.3rem] rounded-[5px] bg-[#f3f4f6] dark:bg-[#384250] outline-none px-2 py-1' />
                    </div>
                </div>

                <div className='w-[100%]'>
                    <button className='px-10 py-2 bg-[#d1e6fb] dark:bg-[#203B56] rounded-[5px]'>
                        <p className='text-white text-[.9rem]'>Update Password</p>
                    </button>
                </div>

                <div className="divider" />
            </div>

            <div className='flex justify-center items-center w-[100%] mt-4'>
                <button className='text-[#ff0000] text-[.9rem]'>Delete Account</button>
            </div>
        </div>
    )
}

export default SettingAccount