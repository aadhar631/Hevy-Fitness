import { Correct } from '../../../assets'

const SettingSubscription = () => {
    return (
        <div className='flex flex-col w-[100%] gap-4 border-[1px] border-[#ecedf0] border-l-0 rounded-r-[8px] max-w-[750px] bg-white p-4 dark:text-white dark:bg-[#1F2022] dark:border-[#42454a]'>
            <p className='text-lg font-[500]'>Current Subscription</p>

            <div className='flex flex-col borderOnly p-4 rounded-[10px] dark:bg-[#384250] dark:border-[#42454a]'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-[#1780ea] font-[500]'>Free Account</p>
                    </div>

                    <div>
                        <img src={Correct} alt="" />
                    </div>
                </div>

                <div>
                    <p className='text-[#6C737F] font-[550] text-[.9rem]'>You will have free access forever.</p>
                </div>
            </div>

            <p className='text-lg font-[500] mt-10'>Change Subscription</p>

            <div className='flex borderOnly rounded-[10px] justify-between px-4 py-3 dark:bg-[#384250] dark:border-[#42454a]'>
                <div className='flex gap-4 items-center'>
                    <p className='text-[#fad900] text-[18px] font-[500]'>PRO</p>
                    <p className='text-[#1780ea] text-[16px] font-[500]'>Monthly</p>
                </div>

                <div className='flex flex-col items-end'>
                    <p className='text-[#1780ea] text-[14px]'>$2.99</p>
                    <p className='text-[#6C737F] text-[.9rem] font-[500]'>Monthly</p>
                </div>
            </div>

            <div className='flex borderOnly rounded-[10px] justify-between px-4 py-3 dark:bg-[#384250] dark:border-[#42454a]'>
                <div className='flex gap-4 items-center'>
                    <p className='text-[#fad900] text-[18px] font-[500]'>PRO</p>
                    <p className='text-[#1780ea] text-[16px] font-[500]'>Monthly</p>
                </div>

                <div className='flex flex-col items-end'>
                    <p className='text-[#1780ea] text-[14px]'>$2.99</p>
                    <p className='text-[#6C737F] text-[.9rem] font-[500]'>Monthly</p>
                </div>
            </div>

            <div className='flex borderOnly rounded-[10px] justify-between px-4 py-3 dark:bg-[#384250] dark:border-[#42454a]'>
                <div className='flex gap-4 items-center'>
                    <p className='text-[#fad900] text-[18px] font-[500]'>PRO</p>
                    <p className='text-[#1780ea] text-[16px] font-[500]'>Monthly</p>
                </div>

                <div className='flex flex-col items-end'>
                    <p className='text-[#1780ea] text-[14px]'>$2.99</p>
                    <p className='text-[#6C737F] text-[.9rem] font-[500]'>Monthly</p>
                </div>
            </div>

            <div className='flex justify-center items-center p-6'>
                <p className='text-[.9rem] text-[#6C737F] font-[500]'>Having issues with your subscription? <a href="" className='text-[#1780ea]'>Contact us.</a></p>
            </div>
        </div>
    )
}

export default SettingSubscription