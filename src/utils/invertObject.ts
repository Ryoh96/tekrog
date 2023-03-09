export const invertObject = <T extends Record<string, string>>(obj: T) => {
  const inverted = Object.entries(obj)
  .map(([key, value]) => [value, key])

  return Object.fromEntries(inverted)
}