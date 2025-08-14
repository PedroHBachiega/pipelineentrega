export interface Match {
  home: string
  away: string
  date: string
  time: string
  venue: string
}

export interface Highlight {
  title: string
  description: string
  image: string
  badge: string
}

export interface Testimonial {
  name: string
  text: string
  team: string
}

export const formatMatchTime = (time: string): string => {
  return time.replace(":", "h")
}

export const getMatchStatus = (date: string, time: string): "upcoming" | "live" | "finished" => {
  const now = new Date()
  const matchDate = new Date(`${date} ${time}`)

  if (matchDate > now) return "upcoming"
  if (matchDate.getTime() - now.getTime() < 2 * 60 * 60 * 1000) return "live"
  return "finished"
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
