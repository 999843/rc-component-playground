import React from 'react'
import clsx from 'clsx'
import MonthCalendar from './_components/MonthCalendar'
import { Dayjs } from 'dayjs'
import Header from './_components/Header'

export interface ICalendarProps {
  value: Dayjs
  style?: React.CSSProperties
  className?: string | string[]
  /**
   * 定制日期显示，会完全覆盖日期单元格
   */
  dateRender?: (currentDate: Dayjs) => React.ReactNode
  /**
   * 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效
   */
  dateInnerContent?: (currentDate: Dayjs) => React.ReactNode
  onChange?: (date: Dayjs) => void
}

const Calendar: React.FC<ICalendarProps> = (props) => {
  return (
    <div className={clsx`w-full min-h-[200px]`}>
      <Header />
      <MonthCalendar {...props} />
    </div>
  )
}

export default Calendar
