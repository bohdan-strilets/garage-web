import type { Breakpoint } from './Breakpoint'
import type { media } from '../theme/media'

export type Media = Record<Breakpoint, string>

export type MediaQuery = (typeof media)[keyof typeof media]
