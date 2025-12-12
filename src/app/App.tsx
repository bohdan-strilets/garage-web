import type { FC } from 'react';

import { Card } from '@shared/ui/surfaces/Card';
import { Paragraph } from '@shared/ui/typography/Paragraph';

const App: FC = () => {
  return (
    <div>
      <Card border="default" tone="default" interactive={false} elevation="md">
        <Paragraph tone="success" size="xs" weight="medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut aliquid modi est assumenda
          labore quos voluptatem, delectus dignissimos quasi voluptas molestiae expedita harum
          mollitia minima vero. Ex reiciendis quod iste error nostrum voluptatibus porro, dolorem
          officia veniam quasi atque reprehenderit nihil et cum distinctio numquam earum iure? Iste
          suscipit ducimus ipsa neque nulla hic cumque provident nihil labore unde rerum, omnis
          voluptates est dolor ea sed. Facilis, assumenda voluptatum quia dicta distinctio magni
          porro non nostrum obcaecati qui saepe atque unde in, nulla perspiciatis. Repudiandae, rem
          cupiditate! Delectus eligendi beatae molestiae neque omnis autem doloremque accusamus
          laborum consequatur. Dolore in quisquam neque obcaecati est amet quia labore harum
          veritatis nostrum officiis, repellat id illum architecto pariatur nihil. In, provident
          tempore!
        </Paragraph>
      </Card>
    </div>
  );
};

export default App;
