import { mark } from './RequiredMark.css'

const RequiredMark = () => {
  return (
    <span className={mark} aria-hidden="true">
      *
    </span>
  )
}

export default RequiredMark
