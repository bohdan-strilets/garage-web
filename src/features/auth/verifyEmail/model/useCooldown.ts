import { useEffect, useState } from 'react'

export const useCooldown = () => {
  const [cooldown, setCooldown] = useState(0)

  const startCooldown = (seconds: number) => {
    setCooldown(seconds)
  }

  useEffect(() => {
    if (cooldown <= 0) return

    const interval = setInterval(() => {
      setCooldown(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [cooldown])

  return {
    cooldown,
    setCooldown,
    startCooldown,
    isCooldownActive: cooldown > 0,
  }
}
