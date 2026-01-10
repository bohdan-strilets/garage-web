export type UserMenuProps = {
  name: string
  avatarUrl?: string
  onProfile: () => void
  onSettings: () => void
  onLogout: () => void
}
