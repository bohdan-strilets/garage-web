import { useTheme } from "@shared/styles";
import { Container } from "@shared/ui/layout/Container";
import { Stack } from "@shared/ui/layout/Stack";
import { Surface } from "@shared/ui/layout/Surface";

const App = () => {
  const { toggle } = useTheme();

  return (
    <Container>
      <Stack>
        <Surface>
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam quae rem
            consequuntur expedita maxime quaerat ducimus sit. Illum vero quia, et debitis modi
            obcaecati laborum alias odio nobis doloremque.
          </p>
        </Surface>
        <Surface>
          <h2>User name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus similique
            maiores iusto voluptates aliquid magni, voluptate enim iste, mollitia iure, quas
            accusamus nesciunt laudantium quidem quos? Nobis, accusamus ea.
          </p>
        </Surface>
        <Surface>
          <h3>Change theme here</h3>
          <button type="button" onClick={toggle}>
            Toggle Theme
          </button>
        </Surface>
      </Stack>
    </Container>
  );
};

export default App;
