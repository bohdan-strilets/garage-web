import Paragraph from '../Paragraph'

import type { HelperTextProps } from './Props'

const HelperText = ({ children, variant, className }: HelperTextProps) => {
  return (
    <Paragraph
      tone={variant === 'muted' ? 'muted' : 'success'}
      className={className}
      size="xs"
    >
      {children}
    </Paragraph>
  )
}

export default HelperText
