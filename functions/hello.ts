export function Name(name: string): string {
  return `Hello ${name || "World"}!`
}

export function Yesterday(date: Date): string {
  // date.setDate(date.getDate()-1)
  return `${Object.keys(date)}`
  // return `🎵 Yesterday (${date.getDay()}), all my troubles seemed so far away`
}
