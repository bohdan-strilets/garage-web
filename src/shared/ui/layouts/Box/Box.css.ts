import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = recipe({
  base: {
    minWidth: 0,
  },

  variants: {
    position: {
      relative: { position: 'relative' },
      absolute: { position: 'absolute' },
      fixed: { position: 'fixed' },
      sticky: { position: 'sticky' },
    },

    display: {
      block: { display: 'block' },
      inlineBlock: { display: 'inline-block' },
      flex: { display: 'flex' },
      grid: { display: 'grid' },
    },

    flexDirection: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },

    flexWrap: {
      wrap: { flexWrap: 'wrap' },
      nowrap: { flexWrap: 'nowrap' },
    },

    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
    },

    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
    },

    gap: {
      xs: { gap: vars.space.xs },
      sm: { gap: vars.space.sm },
      md: { gap: vars.space.md },
      lg: { gap: vars.space.lg },
      xl: { gap: vars.space.xl },
    },

    padding: {
      xs: { padding: vars.space.xs },
      sm: { padding: vars.space.sm },
      md: { padding: vars.space.md },
      lg: { padding: vars.space.lg },
      xl: { padding: vars.space.xl },
    },

    paddingX: {
      xs: { paddingInline: vars.space.xs },
      sm: { paddingInline: vars.space.sm },
      md: { paddingInline: vars.space.md },
      lg: { paddingInline: vars.space.lg },
      xl: { paddingInline: vars.space.xl },
    },

    paddingY: {
      xs: { paddingBlock: vars.space.xs },
      sm: { paddingBlock: vars.space.sm },
      md: { paddingBlock: vars.space.md },
      lg: { paddingBlock: vars.space.lg },
      xl: { paddingBlock: vars.space.xl },
    },

    margin: {
      xs: { margin: vars.space.xs },
      sm: { margin: vars.space.sm },
      md: { margin: vars.space.md },
      lg: { margin: vars.space.lg },
      xl: { margin: vars.space.xl },
    },

    overflow: {
      hidden: { overflow: 'hidden' },
      auto: { overflow: 'auto' },
      visible: { overflow: 'visible' },
    },
  },

  defaultVariants: {
    position: 'relative',
    display: 'block',
  },
})
