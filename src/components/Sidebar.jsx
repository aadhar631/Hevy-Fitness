import { NavLink, useLocation } from "react-router-dom"
import { ActiveExerciseIcon, ActiveFeedIcon, ActiveProfileIcon, ActiveRoutineIcon, ActiveSettingIcon, CrossMenuIcon, DarkLogoutIcon, DarkMenuIcon, ExerciseIcon, FeedIcon, Logo, LogoutIcon, MenuIcon, ProfileIcon, RoutineIcon, SearchBtn, SearchCross, SettingIcon, profilePhoto, whiteLogoIcon } from "../assets"
import { IoMdClose } from "react-icons/io";
import { useState } from "react"

const Sidebar = ({ isDarkMode }) => {

  const location = useLocation() // This is used to track the user location

  const [inputvalue, setInputvalue] = useState('') // This useState is created to chech weaaher the input is empty or not... 

  const [isMenu, setIsMenu] = useState(false) // This useState is created to open or close the slidebar

  return (
    <div className="">

      {isMenu && <div onClick={() => setIsMenu(false)} className="w-[100vw] h-screen bg-[#1012134D] z-[95] absolute lg:hidden"></div>}
      <div className="w-full bg-[#fff] lg:hidden flex p-[16px] border-b-[1.5px] border-[#ECEDF0] dark:bg-[#1F2022] dark:border-none">
        <button onClick={() => setIsMenu(true)} ><img src={isDarkMode ? DarkMenuIcon : MenuIcon} alt="Menu" /></button>
      </div>

      <div className={`${isMenu ? 'visible z-[99]' : 'hidden'} min-h-screen lg:flex flex-col pt-[24px] px-[16px] min-w-[256px] max-w-[256px] bg-[#FFFFFF] dark:bg-[#1F2022] border-r-[1px] border-[#ECEDF0] dark:border-none lg:relative fixed top-0 left-0`}>

        <button onClick={() => setIsMenu(false)} className="absolute top-[16px] right-[16px] lg:hidden" ><img src={CrossMenuIcon} alt="Menu" className="dark:hidden" /><IoMdClose color="white" size={20} className="hidden dark:block" /></button>

        <img src={isDarkMode ? whiteLogoIcon : Logo} alt="Logo" className="pb-[8px]" height={26} width={110} />

        <div className="flex flex-col py-[16px] gap-[4px]">

          <div className="input_search flex h-[45px] px-[5px] bg-[#F3F4F6] dark:bg-[#292B2F] items-center rounded-[6px]">
            <div className="w-[40px] flex items-center justify-center cursor-pointer" ><img src={SearchBtn} alt="search" /></div>
            <input value={inputvalue} onChange={e => setInputvalue(e.target.value)} type="text" placeholder="Search users" className="bg-transparent w-full px-[2px] py-[1px] font-FontOne text-[16px] outline-none" />
            <div onClick={() => setInputvalue('')} className={`w-[40px] items-center justify-center cursor-pointer ${inputvalue ? 'flex' : 'hidden'}`} ><img src={SearchCross} alt="search" /></div>
          </div>

          {/* ALl the Navlinks of SlideBar */}
          <NavLink onClick={() => setIsMenu(false)} to={'/'} className={({ isActive }) => isActive ? 'navLinks bg-[#E8F2FD] dark:bg-[#203B56] text-[#1780EA] mt-[8px]' : 'navLinks mt-[8px]'} >
            <img src={location.pathname === '/' ? ActiveFeedIcon : FeedIcon} alt="Home" />Feed
          </NavLink>

          <NavLink onClick={() => setIsMenu(false)} to={'/routine'} className={({ isActive }) => isActive || location.pathname === '/create-routine' ? 'navLinks bg-[#E8F2FD] dark:bg-[#203B56] text-[#1780EA]' : 'navLinks'} >
            <img src={location.pathname === '/routine' || location.pathname === '/create-routine' ? ActiveRoutineIcon : RoutineIcon} alt="Routine" />Routines
          </NavLink>

          <NavLink onClick={() => setIsMenu(false)} to={'/exercise'} className={({ isActive }) => isActive ? 'navLinks bg-[#E8F2FD] dark:bg-[#203B56] text-[#1780EA]' : 'navLinks'} >
            <img src={location.pathname === '/exercise' ? ActiveExerciseIcon : ExerciseIcon} alt="Home" />Exercises
          </NavLink>

          <NavLink onClick={() => setIsMenu(false)} to={'/profile'} className={({ isActive }) => isActive ? 'navLinks bg-[#E8F2FD] dark:bg-[#203B56] text-[#1780EA]' : 'navLinks'} >
            <img src={location.pathname === '/profile' ? ActiveProfileIcon : ProfileIcon} alt="Home" />Profile
          </NavLink>

          <NavLink onClick={() => setIsMenu(false)} to={'/setting'} className={({ isActive }) => isActive ? 'navLinks bg-[#E8F2FD] dark:bg-[#203B56] text-[#1780EA] lg:flex hidden' : 'navLinks'} >

            <img src={location.pathname === '/setting' ? ActiveSettingIcon : SettingIcon} alt="Home" />Settings
          </NavLink>

        </div>
        
        {/* SlideBar User Section */}
        <div className="absolute bottom-[15px] flex items-center font-FontOne justify-between w-[88%] border-t-[1px] border-[#ECEDF0] dark:border-[#2D2F32] pt-[15px]">
          <div className="flex items-center gap-4">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img src={profilePhoto} alt="user" />
            </div>
            <div className="text-[14px] dark:text-white">adarshjain</div>
          </div>
          <img src={isDarkMode ? DarkLogoutIcon : LogoutIcon} alt="logout" className="cursor-pointer" />
        </div>

      </div>
    </div>
  )
}

export default Sidebar