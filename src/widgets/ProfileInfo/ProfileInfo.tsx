import { Avatar } from "@shared/ui/dataDisplay/Avatar";
import { Stack } from "@shared/ui/layout/Stack";
import { Text } from "@shared/ui/typography/Text";

import { root, name } from "./ProfileInfo.css";

import type { ProfileInfoProps } from "./types/ProfileInfoProps";

export const ProfileInfo = ({ fullName, avatarUrl, onClick }: ProfileInfoProps) => {
  return (
    <button type="button" className={root} onClick={onClick}>
      <Stack direction="row" alignItems="center" gap="sm">
        <Avatar src={avatarUrl} fallback={fullName[0]} size="sm" />
        <Text className={name} size="sm">
          {fullName}
        </Text>
      </Stack>
    </button>
  );
};
