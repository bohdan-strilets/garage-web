import { Button } from '@shared/ui/controls/Button';
import { Heading } from '@shared/ui/typography/Heading';
import { Text } from '@shared/ui/typography/Text';

const App = () => {
  return (
    <div
      style={{
        width: '880px',
        margin: '0 auto',
        padding: '40px 0',
      }}
    >
      <Heading size="2xl" color="muted">
        Lorem ipsum dolor sit amet
      </Heading>
      <Text align="right" color="success" size="sm" weight={700}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro perferendis, dicta
        facere, soluta incidunt voluptatibus, sit enim reprehenderit est quia asperiores in eligendi
        quas veritatis. Id amet soluta repellat excepturi deserunt consequuntur nisi esse doloribus
        fuga molestiae, beatae, autem laboriosam ea obcaecati assumenda iusto facilis qui iure ipsam
        tempore, rem sint delectus debitis itaque? Quasi molestias, vitae sequi mollitia officiis,
        odio nostrum unde corrupti dolores incidunt porro id et? Quisquam magnam quia obcaecati
        provident!
      </Text>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
    </div>
  );
};

export default App;
