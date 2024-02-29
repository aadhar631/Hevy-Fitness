import { CalendarDemo, ProfileHeader, Statistics, FeedLeft } from '../index'

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full overflow-auto">
      <ProfileHeader />

      <div className="profile-charts flex gap-4">
        <Statistics />
        <div className="calendar-chart w-[40%]">
          <CalendarDemo />
        </div>
      </div>

      <FeedLeft />
    </div>
  )
}

export default Profile