import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = recipe({
  base: {
    flexShrink: 0,
  },

  variants: {
    axis: {
      vertical: {},
      horizontal: {},
    },

    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },

    grow: {
      true: { flexGrow: 1 },
    },
  },

  compoundVariants: [
    {
      variants: { axis: 'vertical', size: 'xs' },
      style: { height: themeContract.space.xs },
    },
    {
      variants: { axis: 'vertical', size: 'sm' },
      style: { height: themeContract.space.sm },
    },
    {
      variants: { axis: 'vertical', size: 'md' },
      style: { height: themeContract.space.md },
    },
    {
      variants: { axis: 'vertical', size: 'lg' },
      style: { height: themeContract.space.lg },
    },
    {
      variants: { axis: 'vertical', size: 'xl' },
      style: { height: themeContract.space.xl },
    },

    {
      variants: { axis: 'horizontal', size: 'xs' },
      style: { width: themeContract.space.xs },
    },
    {
      variants: { axis: 'horizontal', size: 'sm' },
      style: { width: themeContract.space.sm },
    },
    {
      variants: { axis: 'horizontal', size: 'md' },
      style: { width: themeContract.space.md },
    },
    {
      variants: { axis: 'horizontal', size: 'lg' },
      style: { width: themeContract.space.lg },
    },
    {
      variants: { axis: 'horizontal', size: 'xl' },
      style: { width: themeContract.space.xl },
    },
  ],

  defaultVariants: {
    axis: 'vertical',
  },
})
