export const getInitials = (name?: string): string => {
  if (!name) return '?'

  return name
    .trim()
    .split(' ')
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase())
    .join('')
}
