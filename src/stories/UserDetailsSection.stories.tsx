import UserDetailsSection from '../components/UserDetailsSection';
import { Meta, StoryFn } from '@storybook/react';
import { UserDetailsSectionProps } from '../types';
import '../githubUserSearch.css';

export default {
  title: 'Components/UserDetailsSection',
  component: UserDetailsSection,
} as Meta;

const Template: StoryFn<UserDetailsSectionProps> = (args) => (
  <UserDetailsSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  login: 'johndoe',
  location: 'New York, USA',
  bio: 'Frontend Developer',
};
