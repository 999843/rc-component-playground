import dayjs from 'dayjs'
import Calendar from './components/Calendar'
import './style/global.css'

function App() {
  return (
    <div className="p-3">
      {/* 日历组件 */}
      {/* <MinCalender /> */}
      <Calendar value={dayjs(new Date())} locale="en-US" />
    </div>
  )
}

export default App
