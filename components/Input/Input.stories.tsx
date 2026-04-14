import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Input } from './Input';

const meta = {
  title: 'Form/Input',
  component: Input,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    keyboardType: 'email-address',
    autoCapitalize: 'none',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    secureTextEntry: true,
  },
};

export const Search: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    returnKeyType: 'search',
  },
};