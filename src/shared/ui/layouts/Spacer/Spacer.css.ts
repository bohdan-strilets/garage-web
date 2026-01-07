import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

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
      style: { height: vars.space.xs },
    },
    {
      variants: { axis: 'vertical', size: 'sm' },
      style: { height: vars.space.sm },
    },
    {
      variants: { axis: 'vertical', size: 'md' },
      style: { height: vars.space.md },
    },
    {
      variants: { axis: 'vertical', size: 'lg' },
      style: { height: vars.space.lg },
    },
    {
      variants: { axis: 'vertical', size: 'xl' },
      style: { height: vars.space.xl },
    },

    {
      variants: { axis: 'horizontal', size: 'xs' },
      style: { width: vars.space.xs },
    },
    {
      variants: { axis: 'horizontal', size: 'sm' },
      style: { width: vars.space.sm },
    },
    {
      variants: { axis: 'horizontal', size: 'md' },
      style: { width: vars.space.md },
    },
    {
      variants: { axis: 'horizontal', size: 'lg' },
      style: { width: vars.space.lg },
    },
    {
      variants: { axis: 'horizontal', size: 'xl' },
      style: { width: vars.space.xl },
    },
  ],

  defaultVariants: {
    axis: 'vertical',
  },
})
