import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import TaskListCard from './TaskListCard';

const meta = {
  title: 'Task/TaskListCard',
  component: TaskListCard,
  decorators: [
    (Story) => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
            <View style={{ width: '100%', maxWidth: 400 }}>
                <Story />
            </View>
        </View>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof TaskListCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      id: '1',
      title: 'Computer Science',
      subtitle: 'Algorithms and data structures',
      percentage: 60,
      tags: ['school', 'important'],
      idColor: 'bg-blue-500',
      idIcon: 'code',
    },
  },
};

export const Completed: Story = {
  args: {
    item: {
      id: '2',
      title: 'Mathematical analysis',
      subtitle: 'Vector spaces',
      percentage: 100,
      tags: ['school', 'important'],
      idColor: 'bg-red-500',
      idIcon: 'code',
    },
  },
};