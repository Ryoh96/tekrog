export const isPartialMatch = (
  searchString: string,
  list: string[],
): boolean => {
  for (const item of list) {
    if (searchString.includes(item)) {
      return true
    }
  }
  return false
}
