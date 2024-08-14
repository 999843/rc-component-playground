import React from 'react'
import { weekList } from '../../_data'
import { ICalendarProps } from '../..'
import { getAllDays } from '../../../../helper/calendar'
import { Dayjs } from 'dayjs'
import clsx from 'clsx'
import { useLocaleContext } from '../../_context'
import allLocales from '../../_locale'

export interface IMonthCalendarProps extends ICalendarProps {
  curMonth: Dayjs
  handleSelect?: (date: Dayjs) => void
}

const MonthCalendar: React.FC<IMonthCalendarProps> = (props) => {
  const { value, curMonth, dateRender, dateInnerContent, handleSelect } = props
  const daysInfo = getAllDays(curMonth)
  const { locale } = useLocaleContext()
  const calendarLocale = allLocales[locale]

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
            key={j}
            onClick={() => {
              handleSelect?.(item.date)
            }}
            className={clsx(
              `flex-1 border overflow-hidden cursor-pointer`,
              i === 0 ? 'border-t-transparent' : 'border-[#eee]',
              item.currentMonth ? 'text-[#000]' : 'text-[#ccc]'
            )}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className={clsx(`p-2.5`)}>
                <div
                  className={clsx(
                    value?.format('YYYY-MM-DD') ===
                      item.date.format('YYYY-MM-DD') &&
                      'bg-[#3f64f6] text-white rounded-full w-7 h-7 flex items-center justify-center'
                  )}
                >
                  {item.date.date()}
                </div>
                <div>{dateInnerContent?.(item.date)}</div>
              </div>
            )}
          </div>
        )
      }
      rows.push(row)
    }

    return rows.map((row, index) => (
      <div key={index} className="flex h-[100px]">
        {row}
      </div>
    ))
  }

  return (
    <div className="w-full">
      <div className="flex w-full box-border text-[#7d7d7f] border-b border-[#ccc]">
        {weekList.map((item) => {
          return (
            <div key={item} className="flex-1 px-4 py-4">
              {calendarLocale.week[item]}
            </div>
          )
        })}
      </div>
      <div>{renderDays(daysInfo)}</div>
    </div>
  )
}
export default MonthCalendar
