import profilePicture from "../../assets/images/profilePicture.png"

const ProfileHeader = () => {
    return (
        <div className='flex gap-8 w-[100%] p-8 border-[1px] rounded-[10px] items-center dark:text-white bg-transparent bg-[#1F2022] dark:border-[#2d2f32]'>
            <div>
                <img src={profilePicture} alt="" className='rounded-full min-w-[9vw] max-w-[9vw] min-h-[9vw] max-h-[9vw] object-cover object-top'/>
            </div>
                
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center text-textColor font-medium'>
                    <p className='text-lg'>adarshjainn</p>

                    <button className='border-[1px] p-[.3rem] rounded-[7px]'>
                        <p className='text-[.9rem]'>Edit Profile</p>
                    </button>
                </div>

                <p className='text-secondTextColor text-[.9rem]'>Adarsh Jain</p>

                <div className='flex gap-8'>
                    <div className='flex items-center gap-1'>
                        <p className='text-[12px] text-secondTextColor'>Workouts</p>
                        <p className='text-[.9rem]'>144</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='text-[12px] text-secondTextColor'>Followers</p>
                        <p className='text-[.9rem]'>0</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='text-[12px] text-secondTextColor'>Followinig</p>
                        <p className='text-[.9rem]'>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader