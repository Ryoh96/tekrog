const shuffleArray = <T>(array: T[]) => {
  const out = [...array]

  for (let i = out.length - 1; i > 0; i--) {
    const idx = Math.floor(Math.random() * (i + 1))
    const tmp = out[i]
    out[i] = out[idx]
    out[idx] = tmp
  }

  return out
}

export default shuffleArray
