import { StoryFn, Meta } from '@storybook/react';
import UserStatsSection from '../components/UserStatsSection';
import { UserStatsSectionProps } from '../types';
import '../GitHubUserSearch.css';

export default {
  title: 'Components/UserStatsSection',
  component: UserStatsSection,
} as Meta;

const Template: StoryFn<UserStatsSectionProps> = (args) => (
  <UserStatsSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  publicRepos: 10,
  followers: 100,
  following: 50,
};
