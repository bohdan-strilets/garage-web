import Paragraph from '../Paragraph'

import type { HelperTextProps } from './Props'

const HelperText = ({
  children,
  tone = 'muted',
  className,
}: HelperTextProps) => {
  return (
    <Paragraph
      tone={tone === 'muted' ? 'muted' : 'success'}
      className={className}
      size="xs"
    >
      {children}
    </Paragraph>
  )
}

export default HelperText
