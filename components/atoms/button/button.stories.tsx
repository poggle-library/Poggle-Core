import type { Meta, StoryObj } from '@storybook/react';

import {Button, ButtonType} from '@Poggle/Components';

const meta: Meta<ButtonType> = {
  component: Button,
  title: 'Components/Atoms/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
  },
};