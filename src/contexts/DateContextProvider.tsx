/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/indent */
import { createContext, useMemo, useState } from 'react'
import { type Period } from '../types'
import { type MomentInput } from 'jalali-moment'

interface DatepickerStore {
  days: { previous: number[]; current: number[]; next: number[] }
  value: {
    startDate: null
    endDate: null
  }
  period: Period
  changePeriod: (period: Period) => void
  dayHover: string | null | undefined
  changeDayHover: (day?: string | null) => void
  changeDatepickerValue: (value?: {
    startDate?: MomentInput | null
    endDate?: MomentInput | null
  }) => void
  daysChangeF:
    | ((days: {
        previous: number[]
        current: number[]
        next: number[]
      }) => void)
    | undefined
  minDate?: string
  maxDate?: string
  disabledDates?: string
}

export const DatepickerContext = createContext<DatepickerStore>({
  days: { previous: [], current: [], next: [] },
  value: {
    startDate: null,
    endDate: null
  },
  period: { start: '', end: '' },
  changePeriod: (_period: Period) => {},
  dayHover: null,
  changeDayHover: (_day?: string | null | undefined) => {},
  changeDatepickerValue: (_value?: {
    startDate?: MomentInput | null
    endDate?: MomentInput | null
  }) => {},
  daysChangeF: (_days?: {
    previous?: number[]
    current?: number[]
    next?: number[]
  }) => {},
  minDate: '',
  maxDate: '',
  disabledDates: ''
})

const DateContextProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  // Start ---------------------------_\
  const [period, setPeriod] = useState<Period>({
    start: '',
    end: ''
  })

  const [dayHover, setDayHover] = useState<string | null | undefined>(null)

  const [valueS, setValueS] = useState<any>({
    startDate: null,
    endDate: null
  })

  const [daysF, setDaysF] = useState<{
    previous: number[]
    current: number[]
    next: number[]
  }>({
    previous: [],
    current: [],
    next: []
  })

  const daysChange = (days: {
    previous: number[]
    current: number[]
    next: number[]
  }): void => {
    setDaysF(days)
  }

  const onChange = (valueS?: {
    startDate?: MomentInput | null
    endDate?: MomentInput | null
  }): void => {
    setValueS(valueS)
  }

  const contextValues = useMemo(() => {
    return {
      days: daysF,
      value: valueS,
      period,
      changePeriod: (newPeriod: Period) => {
        setPeriod(newPeriod)
      },
      dayHover,
      changeDayHover: (newDay: string | null | undefined) => {
        setDayHover(newDay)
      },
      changeDatepickerValue: onChange,
      daysChangeF: daysChange
    }
  }, [period, dayHover, onChange])

  return (
    <DatepickerContext.Provider value={contextValues}>
      {children}
    </DatepickerContext.Provider>
  )
}

export default DateContextProvider
