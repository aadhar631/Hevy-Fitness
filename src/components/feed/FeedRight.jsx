import profilePicture from "../../assets/images/profilePicture.png"

const FeedRight = () => {
    return (

        <div className='flex flex-col pt-10 dark:text-white'>
            <div className='flex flex-col pt-5 borderWithBackground dark:border-[#2d2f32] dark:bg-[#1F2022] rounded-[8px]'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={profilePicture} alt="" className='w-[60px] h-[60px] rounded-[50%] mb-3 object-cover object-top'/>

                        <p className='text-lg'>adarshjain</p>

                        <p className='text-secondTextColor text-l'>Adarsh Jain</p>
                    </div>

                    <div className='flex gap-8'>
                        <div className='flex flex-col flex-grow items-center gap-1'>
                            <p className='text-[13px] text-secondTextColor'>Workouts</p>
                            <p>143</p>
                        </div>

                        <div className='flex flex-col flex-grow items-center gap-1'>
                            <p className='text-[13px] text-secondTextColor'>Followers</p>
                            <p>0</p>
                        </div>

                        <div className='flex flex-col flex-grow items-center gap-1'>
                            <p className='text-[13px] text-secondTextColor'>Following</p>
                            <p>0</p>
                        </div>
                    </div>

                    <button className='borderOnly w-[80%] mb-5 p-1 text-[14px] font-[500]'>
                        <p>See your profile</p>
                    </button>
                </div>

                <div className='border-[1px] height-[1px] dark:border-[#2d2f32]'></div>

                <div className='p-6 text-[14px]'>
                    <p className='text-secondTextColor'>Latest Activity</p>
                    <p className='font-medium'>Pull Day</p>
                    <p>Yesterday at 8:00pm</p>
                </div>
            </div>


            <div>

            </div>
        </div>

    )
}

export default FeedRight