import { media, useMediaQuery } from '@shared/lib/responsive'
import { Icon } from '@shared/ui/controls/Icon'
import { Avatar } from '@shared/ui/data-display/Avatar'
import { Box } from '@shared/ui/layouts/Box'
import { Divider } from '@shared/ui/layouts/Divider'
import { DropdownMenu } from '@shared/ui/navigation/DropdownMenu'
import { DropdownMenuItem } from '@shared/ui/navigation/DropdownMenuItem'
import { Paragraph } from '@shared/ui/typography/Paragraph'

import type { UserMenuProps } from './Props'

const UserMenu = ({
  name,
  avatarUrl,
  onProfile,
  onSettings,
  onLogout,
}: UserMenuProps) => {
  const isTablet = useMediaQuery(media.TABLET)

  return (
    <Box gap="md" display="flex" align="center">
      {isTablet && <Paragraph weight="medium">{name}</Paragraph>}
      <DropdownMenu trigger={<Avatar name={name} src={avatarUrl} />}>
        {({ close }) => (
          <>
            <DropdownMenuItem
              onClick={() => {
                onProfile()
                close()
              }}
            >
              <Box as="span" display="flex" align="center" gap="md">
                <Icon name="profile" />
                Profile
              </Box>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => {
                onSettings()
                close()
              }}
            >
              <Box as="span" display="flex" align="center" gap="md">
                <Icon name="settings" />
                Settings
              </Box>
            </DropdownMenuItem>

            <Divider />

            <DropdownMenuItem
              danger
              onClick={() => {
                onLogout()
                close()
              }}
            >
              <Box as="span" display="flex" align="center" gap="md">
                <Icon name="logout" />
                Logout
              </Box>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenu>
    </Box>
  )
}

export default UserMenu
