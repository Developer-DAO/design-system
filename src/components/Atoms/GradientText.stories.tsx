// GradientTextWrapper.stories.tsx
import React from 'react';
import { Headline1 } from './typography';
import { Meta, Story } from '@storybook/react';
import GradientText, { GradientTextProps } from './GradientText';

export default {
  title: 'Components/GradientTextWrapper',
  component: GradientText,
  argTypes: {
    colorStart: { control: 'color' },
    colorEnd: { control: 'color' },
  },
} as Meta;

const Template: Story<GradientTextProps> = (args: any) => (
  <GradientText {...args}>
    <Headline1 className="text-4xl font-bold">Gradient Text</Headline1>
  </GradientText>
);

export const Default = Template.bind({});
Default.args = {
  colorStart: '#FF7DBC',
  colorEnd: '#FFBA93',
};

export const BlueToPurple = Template.bind({});
BlueToPurple.args = {
  colorStart: '#3498db',
  colorEnd: '#8e44ad',
};
