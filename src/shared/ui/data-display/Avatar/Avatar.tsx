import clsx from 'clsx'

import { useState } from 'react'

import { getInitials } from '@shared/lib/string'

import { image, root } from './Avatar.css'

import type { AvatarProps } from './Props'

const Avatar = ({ src, name, size, shape, className }: AvatarProps) => {
  const [hasError, setHasError] = useState(false)

  const showImage = src && !hasError
  const initials = getInitials(name)

  return (
    <span className={clsx(root({ size, shape }), className)} aria-label={name}>
      {showImage ? (
        <img
          src={src}
          alt={name}
          className={image}
          onError={() => setHasError(true)}
        />
      ) : (
        initials
      )}
    </span>
  )
}

export default Avatar
