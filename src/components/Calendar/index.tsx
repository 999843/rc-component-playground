import React, { forwardRef } from 'react'
import clsx from 'clsx'
import MonthCalendar from './_components/MonthCalendar'
import { Dayjs } from 'dayjs'
import Header from './_components/Header'

export interface ICalendarProps {
  value: Dayjs
  onChange?: (date: Date) => void
}

export interface CalendarRef {
  getDate: () => Date
  setDate: (date: Date) => void
}

const BaseCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  ICalendarProps
> = (props) => {
  return (
    <div className={clsx`w-full min-h-[200px]`}>
      <Header />
      <MonthCalendar {...props} />
    </div>
  )
}

const Calendar = forwardRef(BaseCalendar)
export default Calendar
