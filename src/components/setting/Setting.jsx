import { NavLink, Outlet, useLocation } from "react-router-dom"
import { ExportIcon, LockIcon, SprofileIcon, RightArrow, ThemeIcon, UnitIcon, ActiveProfileIcon, ActiveLockIcon, ActiveUnitIcon, ActiveThemeIcon, ActiveExportIcon, ActiveProIcon, ProIcon, BigSettingIcon, DarkProfileIcon, DarkLockIcon, DarkProIcon, DarkUnitIcon, DarkThemeIcon, DarkExportIcon, DarkRightArrow } from "../../assets"

const Setting = ({ isDarkMode }) => {

  const location = useLocation() // To trck the location of the user

  return (
    <div className="w-[100%] h-[100%]">
      <div className="lg:hidden w-[100%] h-[60%] justify-center p-[20px] flex items-center flex-col">
        <img src={BigSettingIcon} alt="Setting" />
        <h1 className="text-[16px] mt-4 dark:text-white" >Change your settings in the Hevy mobile app</h1>
      </div>
      <div className="lg:flex w-[100%] h-[100%] justify-center p-[20px] hidden">
        <div className="max-w-[300px] w-[100%] h-[100%] bg-white border-[1px] border-[#ecedf0] dark:bg-[#1F2022] dark:border-[#2d2f32] dark:text-white flex flex-col p-[20px] rounded-l-[8px]">
          <h1 className="text-[16px] text-[#6C737F]" >Account</h1>
          <NavLink to={''} className='py-[16px] text-[16px] font-[500] flex items-center justify-between' ><div className="flex items-center"><img src={location.pathname === '/setting' ? ActiveProfileIcon : SprofileIcon} alt="profile" className="mr-2 dark:hidden" /><img src={location.pathname === '/setting' ? ActiveProfileIcon : DarkProfileIcon} alt="profile" className="mr-2 hidden dark:block" /> Profile</div> <img src={isDarkMode ? DarkRightArrow : RightArrow} alt="goo" className="dark" /></NavLink>
          <div className="divider" />
          
          <NavLink to={'account'} className='py-[16px] text-[16px] font-[500] flex items-center justify-between' ><div className="flex items-center"><img src={location.pathname === '/setting/account' ? ActiveLockIcon : LockIcon} alt="profile" className="mr-2 dark:hidden" /><img src={location.pathname === '/setting/account' ? ActiveLockIcon : DarkLockIcon} alt="profile" className="mr-2 dark:block hidden" /> Account</div> <img src={isDarkMode ? DarkRightArrow : RightArrow} alt="goo" className="dark" /></NavLink>
          <div className="divider" />
          
          <NavLink to={'subscription'} className='py-[16px] text-[16px] font-[500] flex items-center justify-between' ><div className="flex items-center"><img src={location.pathname === '/setting/subscription' ? ActiveProIcon : ProIcon} alt="profile" className="mr-2 dark:hidden" /><img src={location.pathname === '/setting/subscription' ? ActiveProIcon : DarkProIcon} alt="profile" className="mr-2 hidden dark:block" /> Manage Subscription</div> <img src={isDarkMode ? DarkRightArrow : RightArrow} alt="goo" className="dark" /></NavLink>
          <div className="divider" />
          
          <h1 className="text-[16px] text-[#6C737F] mt-[16px]" >Prefrences</h1>
          <NavLink to={'unit'} className='py-[16px] text-[16px] font-[500] flex items-center justify-between' ><div className="flex items-center"><img src={location.pathname === '/setting/unit' ? ActiveUnitIcon : UnitIcon} alt="profile" className="mr-2 dark:hidden" /><img src={location.pathname === '/setting/unit' ? ActiveUnitIcon : DarkUnitIcon} alt="profile" className="mr-2 hidden dark:block" /> Units</div> <img src={isDarkMode ? DarkRightArrow : RightArrow} alt="goo" className="dark" /></NavLink>
          <div className="divider" />
          
          <NavLink to={'theme'} className='py-[16px] text-[16px] font-[500] flex items-center justify-between' ><div className="flex items-center"><img src={location.pathname === '/setting/theme' ? ActiveThemeIcon : ThemeIcon} alt="profile" className="mr-2 dark:hidden" /><img src={location.pathname === '/setting/theme' ? ActiveThemeIcon : DarkThemeIcon} alt="profile" className="mr-2 hidden dark:block" /> Theme</div> <img src={isDarkMode ? DarkRightArrow : RightArrow} alt="goo" className="dark" /></NavLink>
          <div className="divider" />
          
          <NavLink to={'export'} className='py-[16px] text-[16px] font-[500] flex items-center justify-between' ><div className="flex items-center"><img src={location.pathname === '/setting/export' ? ActiveExportIcon : ExportIcon} alt="profile" className="mr-2 dark:hidden" /><img src={location.pathname === '/setting/export' ? ActiveExportIcon : DarkExportIcon} alt="profile" className="mr-2 hidden dark:block" /> Export Data</div> <img src={isDarkMode ? DarkRightArrow : RightArrow} alt="goo" className="dark" /></NavLink>
          <div className="divider" />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Setting