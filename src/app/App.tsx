import { Button } from '@shared/ui/controls/Button';
import { Checkbox } from '@shared/ui/form/Checkbox';
import { FieldError } from '@shared/ui/form/FieldError';
import { Input } from '@shared/ui/form/Input';
import { Label } from '@shared/ui/form/Label';
import { PasswordInput } from '@shared/ui/form/PasswordInput';
import { Select } from '@shared/ui/form/Select';
import { Heading } from '@shared/ui/typography/Heading';
import { Text } from '@shared/ui/typography/Text';

const App = () => {
  return (
    <div
      style={{
        maxWidth: '880px',
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
      <Button variant="primary" size="sm">
        Primary
      </Button>
      <Button variant="secondary" size="lg">
        Secondary
      </Button>
      <Button variant="success" size="md" disabled>
        Success
      </Button>

      <form action="">
        <Label htmlFor="input-id" required fullWidth>
          Label for first input text
        </Label>
        <Input id="input-id" type="text" invalid={false} />
        <FieldError message="This field is required" />
        <PasswordInput />
        <Checkbox
          label="Accept terms and conditions"
          helperText="You must accept before continuing"
          checked
        />

        <Select
          value={'option5'}
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option3', label: 'Option 3' },
            { value: 'option4', label: 'Option 4' },
            { value: 'option5', label: 'Option 5' },
            { value: 'option6', label: 'Option 6' },
            { value: 'option7', label: 'Option 7' },
          ]}
        />
      </form>
    </div>
  );
};

export default App;
