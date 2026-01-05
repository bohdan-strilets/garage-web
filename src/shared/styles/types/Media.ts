import type { media } from '@shared/lib/responsive'

import type { Breakpoint } from './Breakpoint'

export type Media = Record<Breakpoint, string>

export type MediaQuery = (typeof media)[keyof typeof media]
