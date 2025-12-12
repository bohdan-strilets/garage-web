import type { FC } from 'react';

import { Card } from '@shared/ui/surfaces/Card';

const App: FC = () => {
  return (
    <div>
      <Card border="default" tone="default" interactive={false} elevation="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium ullam natus
        quibusdam impedit aliquid provident optio magni, quo magnam aliquam, voluptate facere hic
        perspiciatis voluptates molestiae quos ratione. Quis!
      </Card>
    </div>
  );
};

export default App;
