import type { FC } from "react";

import { useTheme } from "@shared/styles";
import { Container } from "@shared/ui/layout/Container";
import { Stack } from "@shared/ui/layout/Stack";

const App: FC = () => {
  const { toggle } = useTheme();

  return (
    <Container>
      <Stack>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam quae rem
          consequuntur expedita maxime quaerat ducimus sit. Illum vero quia, et debitis modi
          obcaecati laborum alias odio nobis doloremque.
        </p>
        <h2>User name</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus similique
          maiores iusto voluptates aliquid magni, voluptate enim iste, mollitia iure, quas accusamus
          nesciunt laudantium quidem quos? Nobis, accusamus ea.
        </p>
        <div>
          <h3>Change theme here</h3>
          <button type="button" onClick={toggle}>
            Toggle Theme
          </button>
        </div>
      </Stack>
    </Container>
  );
};

export default App;
