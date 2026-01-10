export type UserMenuProps = {
  name: string
  avatarUrl?: string
  isLoading?: boolean
  onProfile: () => void
  onSettings: () => void
  onLogout: () => void
}
