import { HashRouter, Route, Routes } from "react-router-dom"

// Importing all the components...
import { Sidebar, Feed, Routine, Exercise, Profile, Setting, SettingProfile, SettingAccount, SettingSubscription, SettingUnit, SettingTheme, SettingExport } from "./components"
import CreateRoutine from "./components/routine/CreateRoutine"
import { useState } from "react"

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [ status, setStatus ] = useState('light')

  return (
    <div className={isDarkMode && 'dark'} >
      <div className="w-full min-h-[screen] dark:bg-[#191A1C] h-screen max-h-screen overflow-y-hidden bg-primaryColor flex flex-col lg:flex-row font-FontOne">
        <HashRouter >
          <Sidebar isDarkMode={isDarkMode} />
          <Routes >
            <Route path="/" element={<Feed />} />
            <Route path="/routine" element={<Routine />} />
            <Route path="/create-routine" element={<CreateRoutine />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting isDarkMode={isDarkMode} />} >
              <Route path="" element={<SettingProfile />} />
              <Route path="?account" element={<SettingAccount />} />
              <Route path="?subscription" element={<SettingSubscription />} />
              <Route path="?unit" element={<SettingUnit />} />
              <Route path="?theme" element={<SettingTheme setIsDarkMode={setIsDarkMode} status={status} setStatus={setStatus} />} />
              <Route path="?export" element={<SettingExport />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  )
}

export default App