import React from 'react';
import { Story, Meta } from '@storybook/react';
import TopBarGrid from './TopBarGrid';

const SampleTopbarContent: React.FC = () => {
    return (
      <div className="flex justify-between items-center w-full px-4 py-2 text-white">
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav className="flex space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    );
  };
  
export default {
  title: 'Components/TopBarGrid',
  component: TopBarGrid,
} as Meta;

const Template: Story = (args) => (
  <TopBarGrid {...args}>
    <SampleTopbarContent />
  </TopBarGrid>
);

export const Default = Template.bind({});
