import { useTheme } from "@shared/styles";
import { Box } from "@shared/ui/layout/Box";
import { Container } from "@shared/ui/layout/Container";
import { Stack } from "@shared/ui/layout/Stack";
import { Surface } from "@shared/ui/layout/Surface";

const App = () => {
  const { toggle } = useTheme();

  return (
    <Container>
      <Stack>
        <Surface>
          <Box padding="sm">
            <h1>Hello</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam quae rem
              consequuntur expedita maxime quaerat ducimus sit. Illum vero quia, et debitis modi
              obcaecati laborum alias odio nobis doloremque.
            </p>
          </Box>
        </Surface>
        <Surface>
          <Box padding="sm">
            <h2>User name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus
              similique maiores iusto voluptates aliquid magni, voluptate enim iste, mollitia iure,
              quas accusamus nesciunt laudantium quidem quos? Nobis, accusamus ea.
            </p>
          </Box>
        </Surface>
        <Box padding="sm">
          <Surface>
            <h3>Change theme here</h3>
            <button type="button" onClick={toggle}>
              Toggle Theme
            </button>
          </Surface>
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
