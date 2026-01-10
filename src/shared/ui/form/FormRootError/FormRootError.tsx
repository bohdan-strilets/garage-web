import { useFormContext } from 'react-hook-form'

import { Paragraph } from '@shared/ui/typography/Paragraph'

const FormRootError = () => {
  const {
    formState: { errors },
  } = useFormContext()

  if (!errors.root) return null

  return (
    <Paragraph tone="danger" align="center" size="sm">
      {errors.root.message}
    </Paragraph>
  )
}

export default FormRootError
