import { AUTH_COOLDOWNS } from '@shared/config/authCooldowns'
import { useCooldown } from '@shared/hooks'

import { useForgotPassword } from './useForgotPassword'
import { useForgotPasswordFormSubmit } from './useForgotPasswordFormSubmit'

export const useForgotPasswordForm = () => {
  const mutation = useForgotPassword()
  const { cooldown, startCooldown, isCooldownActive } = useCooldown()

  const onSubmit = useForgotPasswordFormSubmit(
    mutation,
    startCooldown,
    AUTH_COOLDOWNS.FORGOT_PASSWORD,
  )

  const isDisabled = mutation.isPending || isCooldownActive

  return {
    onSubmit,
    isDisabled,
    cooldown,
    isCooldownActive,
    isPending: mutation.isPending,
  }
}
