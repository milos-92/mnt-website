import { useEffect, useState } from 'react'

function formatLondon(): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}

/** Live London time as HH:MM, ticking every second. */
export function useLondonTime(): string {
  const [time, setTime] = useState(formatLondon)

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatLondon()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return time
}
