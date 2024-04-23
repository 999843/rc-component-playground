import React, { forwardRef, useImperativeHandle, useState } from 'react'
import clsx from 'clsx'
import { daysOfMonth, firstDayOfMonth } from '../../../../helper/calendar'
import { monthNames, weeks } from '../../_data'

export interface ICalendarProps {
  value?: Date
  onChange?: (date: Date) => void
}

export interface CalendarRef {
  getDate: () => Date
  setDate: (date: Date) => void
}

// tips:
// Date 的 month 是从 0 开始计数的，取值是 0 到 11
// date 传 0 的时候，取到的是上个月的最后一天

/**
 * 实现简单迷你版日历组件
 */
const InternalCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  ICalendarProps
> = (props, ref) => {
  const { value = new Date(), onChange } = props
  const [date, setDate] = useState(value)

  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date
      },
      setDate(date: Date) {
        setDate(date)
      }
    }
  })

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }

  const handlePreMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }

  const renderDays = () => {
    const days = []

    const daysCount = daysOfMonth(date.getDay(), date.getMonth())
    const firstDay = firstDayOfMonth(date.getDay(), date.getMonth())

    for (let index = 0; index < firstDay; index++) {
      days.push(<div key={`empty-${index}`}></div>)
    }

    for (let index = 1; index <= daysCount; index++) {
      const clickHandler = onChange?.bind(
        null,
        new Date(date.getFullYear(), date.getMonth(), index)
      )
      if (index === date.getDate()) {
        days.push(
          <div
            key={index}
            onClick={clickHandler}
            className="bg-gray-300 p-1 text-white rounded w-[calc(100%/7)]"
          >
            {index}
          </div>
        )
      } else {
        days.push(
          <div
            key={index}
            onClick={clickHandler}
            className="p-1 w-[calc(100%/7)] rounded hover:cursor-pointer hover:bg-gray-300 hover:text-white"
          >
            {index}
          </div>
        )
      }
    }

    return days
  }

  const arrowClass = clsx`font-semibold justify-center rounded hover:text-white w-6 flex items-center h-5 p-1 hover:bg-gray-300`
  return (
    <div className="max-w-[500px] mx-auto">
      <div className="flex justify-between">
        <button onClick={handleNextMonth} className={arrowClass}>
          &lt;
        </button>
        <div>
          {date.getFullYear()} 年 {monthNames[date.getMonth()]}
        </div>
        <button onClick={handlePreMonth} className={arrowClass}>
          &gt;
        </button>
      </div>
      <div className="flex w-full flex-wrap mt-2 [&_div]:text-center">
        {weeks.map((item, index) => (
          <div key={index} className="text-center w-[calc(100%/7)] p-1">
            {item}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  )
}

const MinCalender = forwardRef(InternalCalendar)
export default MinCalender
