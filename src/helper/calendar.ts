import { Dayjs } from 'dayjs'

export function daysOfMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

export function firstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export function getAllDays(date: Dayjs) {
  // const daysInMonth = date.daysInMonth()
  const startDate = date.startOf('month')
  const day = startDate.day()

  const daysInfo: Array<{
    date: Dayjs
    currentMonth: boolean
  }> = new Array(6 * 7)

  for (let index = 0; index < day; index++) {
    daysInfo[index] = {
      date: startDate.subtract(day - index, 'day'),
      currentMonth: false
    }
  }
  for (let index = day; index < daysInfo.length; index++) {
    const calcDate = startDate.add(index - day, 'day')
    daysInfo[index] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month()
    }
  }

  return daysInfo
}
