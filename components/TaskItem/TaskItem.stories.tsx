import type { Meta, StoryObj } from '@storybook/react-native';
import { useState } from "react";
import { View } from 'react-native';
import { fn } from "storybook/test";

import { TaskItem } from './TaskItem';

const meta = {
  title: 'Task/TaskItem',
  component: TaskItem,
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

  args: {
    onToggle: fn(),
    onMenu: fn(),
  },
  argTypes: {
    task: {
      control: "object",
    },
  },

} satisfies Meta<typeof TaskItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const InteractiveWrapper = (args: React.ComponentProps<typeof TaskItem>) => {
  const [task, setTask] = useState(args.task);

  const handleToggle = () => {
    setTask((prev) => ({
      ...prev,
      completed: !prev.completed,
    }));

    args.onToggle(task.id);
  };

  return (
    <TaskItem
      task={task}
      onToggle={handleToggle}
      onMenu={args.onMenu}
    />
  );
};

export const Default: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    task: {
      id: "1",
      title: "Setup React Native",
      description: "Install dependencies",
      completed: false,
    },
  },
};

export const Completed: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    task: {
      id: "1",
      title: "Completed Task",
      description: "Already done",
      completed: true,
    },
  },
};

export const LongText: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    task: {
      id: "1",
      title: "Very long task title that should wrap correctly in the UI",
      description:
        "This is a long description to test wrapping and layout behavior in different screen sizes.",
      completed: false,
    },
  },
};