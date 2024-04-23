import React from 'react'
import { weekList } from '../../_data'
import { ICalendarProps } from '../..'
import { getAllDays } from '../../../../helper/calendar'
import { Dayjs } from 'dayjs'
import clsx from 'clsx'

export interface IMonthCalendarProps extends ICalendarProps {}

const MonthCalendar: React.FC<IMonthCalendarProps> = (props) => {
  const { value } = props
  const daysInfo = getAllDays(value)

  function renderDays(
    days: Array<{
      date: Dayjs
      currentMonth: boolean
    }>
  ) {
    const rows = []
    for (let i = 0; i < 6; i++) {
      const row = []
      for (let j = 0; j < 7; j++) {
        const item = days[i * 7 + j]
        row[j] = (
          <div
            className={clsx(
              `flex-1 p-2.5 border`,
              i === 0 ? 'border-t-transparent' : 'border-[#eee]',
              item.currentMonth ? 'text-[#000]' : 'text-[#ccc]'
            )}
          >
            {item.date.date()}
          </div>
        )
      }
      rows.push(row)
    }

    return rows.map((row) => <div className="flex h-[100px]">{row}</div>)
  }

  return (
    <div className="w-full">
      <div className="flex w-full box-border text-[#7d7d7f] border-b border-[#ccc]">
        {weekList.map((item) => {
          return (
            <div key={item} className="flex-1 px-4 py-4">
              {item}
            </div>
          )
        })}
      </div>
      <div>{renderDays(daysInfo)}</div>
    </div>
  )
}
export default MonthCalendar
