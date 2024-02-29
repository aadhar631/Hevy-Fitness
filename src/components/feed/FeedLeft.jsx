import { profilePhoto } from "../../assets";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";

const FeedLeft = () => {
    return (
        <div className='flex flex-col gap-4 font-FontTwo pt-10 dark:text-white'>
            <h1 className='text-2xl font-medium mb-2 text-textColor dark:text-white'>Home</h1>

            <div className='flex flex-col gap-4 borderWithBackground dark:bg-[#1F2022] dark:border-[#2d2f32] p-4 rounded-[8px]'>
                <div className='flex text-[14px] items-center'>
                    <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                    <div className='ml-4 text-textColor'>
                        <p>adarshjain</p>
                        <p className='text-secondTextColor'>Yesterday at 8:00pm</p>
                    </div>
                </div>

                <p>Pull Day</p>

                <div className='flex gap-8'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[12px] text-secondTextColor'>Duration</p>
                        <p className='text-textColor text-[15px]'>1h 47min</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-[12px] text-secondTextColor'>Volume</p>
                        <p className='text-textColor text-[15px]'>3,880 kg</p>
                    </div>
                </div>

                <div className='divider mt-4 mb-4 dark:bg-[#2d2f32]' />

                <div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-secondTextColor'>Workout</p>

                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-4 items-center'>
                                <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                                <p>4 sets Bent Over Row (Dumbell)</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                                <p>4 sets Bent Over Row (Dumbell)</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                                <p>4 sets Bent Over Row (Dumbell)</p>
                            </div>
                        </div>

                        <div className='text-center'>
                            <p className='text-secondTextColor'>See 3 more exercises</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between text-secondTextColor text-[15px]'>
                    <p>0 likes</p>
                    <p>0 comments</p>
                </div>

                <div className='border-t-[1px] border-b-[1px] dark:border-[#2d2f32]'>
                    <div className='flex justify-between pt-4 pb-4 text-2xl text-[#1d83ea]'>
                        <div className='flex-grow flex items-center justify-center'><BiLike className="cursor-pointer" /></div>
                        <div className='flex-grow flex items-center justify-center'><FaRegComment className="cursor-pointer" /></div>
                        <div className='flex-grow flex items-center justify-center'><IoShareOutline className="cursor-pointer" /></div>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div>
                        <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                    </div>

                    <div className='flex flex-grow gap-4 items-center'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Write a comment...' className='w-[100%] font-normal h-[50px] resize-none bg-[#f3f4f6] dark:bg-[#191A1C] rounded-[5px] p-3 border-none outline-none'></textarea>

                        <div>
                            <p className='text-secondTextColor'>Post</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 border-[1px] rounded-[10px] p-4 bg-white dark:bg-[#1F2022] dark:border-[#2d2f32]'>
                <div className='flex text-[14px] items-center'>
                    <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                    <div className='ml-4 text-textColor'>
                        <p>adarshjain</p>
                        <p className='text-secondTextColor'>Yesterday at 8:00pm</p>
                    </div>
                </div>

                <p>Pull Day</p>

                <div className='flex gap-8'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[12px] text-secondTextColor'>Duration</p>
                        <p className='text-textColor text-[15px]'>1h 47min</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-[12px] text-secondTextColor'>Volume</p>
                        <p className='text-textColor text-[15px]'>3,880 kg</p>
                    </div>
                </div>

                <div className='divider mt-4 mb-4 dark:bg-[#2d2f32]' />

                <div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-secondTextColor'>Workout</p>

                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-4 items-center'>
                                <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                                <p>4 sets Bent Over Row (Dumbell)</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                                <p>4 sets Bent Over Row (Dumbell)</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                                <p>4 sets Bent Over Row (Dumbell)</p>
                            </div>
                        </div>

                        <div className='text-center'>
                            <p className='text-secondTextColor'>See 3 more exercises</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between text-secondTextColor text-[15px]'>
                    <p>0 likes</p>
                    <p>0 comments</p>
                </div>

                <div className='border-t-[1px] border-b-[1px] dark:border-[#2d2f32]'>
                    <div className='flex justify-between pt-4 pb-4 text-2xl text-[#1d83ea]'>
                        <div className='flex-grow flex items-center justify-center'><BiLike className="cursor-pointer" /></div>
                        <div className='flex-grow flex items-center justify-center'><FaRegComment className="cursor-pointer" /></div>
                        <div className='flex-grow flex items-center justify-center'><IoShareOutline className="cursor-pointer" /></div>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div>
                        <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                    </div>

                    <div className='flex flex-grow gap-4 items-center'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Write a comment...' className='w-[100%] font-normal h-[50px] resize-none bg-[#f3f4f6] dark:bg-[#191A1C] rounded-[5px] p-3 border-none outline-none'></textarea>

                        <div>
                            <p className='text-secondTextColor'>Post</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 border-[1px] rounded-[10px] p-4 bg-white dark:bg-[#1F2022] dark:border-[#2d2f32]'>
                <div className='flex text-[14px] items-center'>
                    <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                    <div className='ml-4 text-textColor'>
                        <p>adarshjain</p>
                        <p className='text-secondTextColor'>Yesterday at 8:00pm</p>
                    </div>
                </div>

                <p>Pull Day</p>

                <div className='flex gap-8'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[12px] text-secondTextColor'>Duration</p>
                        <p className='text-textColor text-[15px]'>1h 47min</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-[12px] text-secondTextColor'>Volume</p>
                        <p className='text-textColor text-[15px]'>3,880 kg</p>
                    </div>
                </div>

                <div className='divider mt-4 mb-4 dark:bg-[#2d2f32]' />

                <div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-secondTextColor'>Workout</p>

                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-4 items-center'>
                                <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                                <p>4 sets Bent Over Row (Dumbell)</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                                <p>4 sets Bent Over Row (Dumbell)</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                                <p>4 sets Bent Over Row (Dumbell)</p>
                            </div>
                        </div>

                        <div className='text-center'>
                            <p className='text-secondTextColor'>See 3 more exercises</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between text-secondTextColor text-[15px]'>
                    <p>0 likes</p>
                    <p>0 comments</p>
                </div>

                <div className='border-t-[1px] border-b-[1px] dark:border-[#2d2f32]'>
                    <div className='flex justify-between pt-4 pb-4 text-2xl text-[#1d83ea]'>
                        <div className='flex-grow flex items-center justify-center'><BiLike className="cursor-pointer" /></div>
                        <div className='flex-grow flex items-center justify-center'><FaRegComment className="cursor-pointer" /></div>
                        <div className='flex-grow flex items-center justify-center'><IoShareOutline className="cursor-pointer" /></div>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div>
                        <img src={profilePhoto} alt="" className='w-[48px] h-[48px] rounded-[50%] object-cover object-top' />
                    </div>

                    <div className='flex flex-grow gap-4 items-center'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Write a comment...' className='w-[100%] font-normal h-[50px] resize-none bg-[#f3f4f6] dark:bg-[#191A1C] rounded-[5px] p-3 border-none outline-none'></textarea>

                        <div>
                            <p className='text-secondTextColor'>Post</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedLeft