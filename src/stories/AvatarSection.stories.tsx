import AvatarSection from '../components/AvatarSection';
import { Meta, StoryFn } from '@storybook/react';
import { AvatarSectionProps } from '../types';
import '../GitHubUserSearch.css';

export default {
  title: 'Components/AvatarSection',
  component: AvatarSection,
} as Meta;

const Template: StoryFn<AvatarSectionProps> = (args) => (
  <AvatarSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  login: 'exampleUser',
  avatarUrl:
    'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
};
