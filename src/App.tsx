import dayjs from 'dayjs'
import Calendar from './components/Calendar'
import './style/global.css'
import IconList from './components/Icon/IconList'
import Space from './components/Space'
import { ConfigProvider } from './components/Space/context'
import Portal from './components/Portal'
import CopyToClipboard from './components/CopyToClipboard/indext'

function App() {
  return (
    <div className="p-3">
      {/* <MinCalender /> */}
      <Calendar value={dayjs(new Date())} locale="en-US" />
      <IconList></IconList>
      <ConfigProvider space={{ size: 'large' }}>
        <Space
          split={<span>split</span>}
          className="bg-orange-300 [&>div]:bg-blue-100 h-24 mx-auto"
          wrap
        >
          {new Array(10).fill(0).map((_, index) => {
            return <div key={index}>{index + 1}</div>
          })}
        </Space>
      </ConfigProvider>

      <Portal>
        <div>children</div>
      </Portal>

      <CopyToClipboard text={'hello world'}>
        <span>CopyToClipboard</span>
      </CopyToClipboard>
    </div>
  )
}

export default App
