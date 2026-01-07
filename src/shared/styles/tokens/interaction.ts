import { vars } from '../theme/contract.css'

const { duration, easing } = vars.motion

export const interaction = {
  disabledOpacity: 0.4,

  hover: {
    opacity: 0.84,
    transition: `opacity ${duration.base} ${easing.standard}`,
  },

  active: {
    scale: 0.98,
  },

  focus: {
    ringWidth: '2px',
    ringOffset: '2px',
  },
} as const
