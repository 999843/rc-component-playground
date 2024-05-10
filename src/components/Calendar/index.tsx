import React, { useState } from 'react'
import clsx from 'clsx'
import MonthCalendar from './_components/MonthCalendar'
import dayjs, { Dayjs } from 'dayjs'
import Header from './_components/Header'
import { LocaleContextProvider } from './_context'

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
  /** 国际化 */
  locale?: string
  onChange?: (date: Dayjs) => void
}

const Calendar: React.FC<ICalendarProps> = (props) => {
  const { className, style, locale, value, onChange } = props

  const [currentValue, setCurrentValue] = useState<Dayjs>(value)
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(value)

  function handleSelect(date: Dayjs) {
    setCurrentValue(date)
    onChange?.(date)
  }

  const prevMonthHandler = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'))
  }
  const nextMonthHandler = () => {
    setCurrentMonth(currentMonth.add(1, 'month'))
  }
  const todayHandler = () => {
    const date = dayjs(Date.now())
    setCurrentMonth(date)
    setCurrentValue(date)
    onChange?.(date)
  }

  return (
    <LocaleContextProvider
      value={{
        locale: locale || navigator.language
      }}
    >
      <div style={style} className={clsx(className)}>
        <Header
          curMonth={currentMonth}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        />
        <MonthCalendar
          {...props}
          value={currentValue}
          curMonth={currentMonth}
          handleSelect={handleSelect}
        />
      </div>
    </LocaleContextProvider>
  )
}

export default Calendar
