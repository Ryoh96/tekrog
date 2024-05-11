const getYearMonth = (date: string[]) => {
  const yearMonthSet = new Set<string>(date)

  const yearMonthList: [string, string][] = []

  yearMonthSet.forEach((ym) =>
    yearMonthList.push(ym.split('-') as [string, string]),
  )

  return yearMonthList
}

export default getYearMonth
