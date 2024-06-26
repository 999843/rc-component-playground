import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Dayjs } from 'dayjs'
import { useLocaleContext } from '../../_context'
import allLocales from '../../_locale'

export interface IHeaderProps {
  curMonth?: Dayjs
  prevMonthHandler: () => void
  nextMonthHandler: () => void
  todayHandler: () => void
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { curMonth, prevMonthHandler, nextMonthHandler, todayHandler } = props
  const localeContext = useLocaleContext()

  const calendarContext = allLocales[localeContext.locale]

  const arrowClass = `text-gray cursor-pointer text-sm hover:text-gray-400`

  return (
    <div className="flex items-start">
      <div className="flex items-center">
        <LeftOutlined
          className={`${arrowClass} pr-3`}
          onClick={prevMonthHandler}
        />
        <span className="font-semibold mx-10 text-xl">
          {curMonth?.format(calendarContext.formatMonth)}
        </span>
        <RightOutlined
          className={`${arrowClass} px-3`}
          onClick={nextMonthHandler}
        />
        <button
          onClick={todayHandler}
          className="text-sm bg-gray-100 rounded px-2 py-1 hover:bg-[#ccc] hover:text-white"
        >
          {calendarContext.today}
        </button>
      </div>
    </div>
  )
}
export default Header
