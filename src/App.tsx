import dayjs from 'dayjs'
import Calendar from './components/Calendar'
import './style/global.css'

function App() {
  return (
    <div className="p-3">
      {/* 日历组件 */}
      {/* <MinCalender /> */}
      <Calendar value={dayjs('2024-4-21')} />
    </div>
  )
}

export default App
