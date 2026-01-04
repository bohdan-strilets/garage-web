import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = recipe({
  base: {
    boxSizing: 'border-box',
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
      xs: { gap: themeContract.space.xs },
      sm: { gap: themeContract.space.sm },
      md: { gap: themeContract.space.md },
      lg: { gap: themeContract.space.lg },
      xl: { gap: themeContract.space.xl },
    },

    padding: {
      xs: { padding: themeContract.space.xs },
      sm: { padding: themeContract.space.sm },
      md: { padding: themeContract.space.md },
      lg: { padding: themeContract.space.lg },
      xl: { padding: themeContract.space.xl },
    },

    paddingX: {
      xs: { paddingInline: themeContract.space.xs },
      sm: { paddingInline: themeContract.space.sm },
      md: { paddingInline: themeContract.space.md },
      lg: { paddingInline: themeContract.space.lg },
      xl: { paddingInline: themeContract.space.xl },
    },

    paddingY: {
      xs: { paddingBlock: themeContract.space.xs },
      sm: { paddingBlock: themeContract.space.sm },
      md: { paddingBlock: themeContract.space.md },
      lg: { paddingBlock: themeContract.space.lg },
      xl: { paddingBlock: themeContract.space.xl },
    },

    margin: {
      xs: { margin: themeContract.space.xs },
      sm: { margin: themeContract.space.sm },
      md: { margin: themeContract.space.md },
      lg: { margin: themeContract.space.lg },
      xl: { margin: themeContract.space.xl },
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
