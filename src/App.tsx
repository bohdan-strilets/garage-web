import { useTheme } from '@shared/styles'

const App = () => {
  const { toggleTheme } = useTheme()

  return (
    <>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        doloremque rem perferendis unde! Totam voluptate fugiat explicabo vitae
        exercitationem corrupti asperiores eum beatae error aperiam, optio ut.
        Minus, quaerat facere.
      </p>

      <button type="button" onClick={toggleTheme}>
        Change THEME
      </button>
    </>
  )
}

export default App
