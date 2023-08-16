import { Meta, StoryFn } from '@storybook/react';
import { UserInfoProps } from '../types';
import UserInfo from '../components/UserInfo';
import '../GitHubUserSearch.css';

export default {
  title: 'Components/UserInfo',
  component: UserInfo,
} as Meta;

const Template: StoryFn<UserInfoProps> = (args) => <UserInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: {
    login: 'johndoe',
    avatar_url:
      'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    name: 'John Doe',
    location: 'New York, USA',
    bio: 'Frontend Developer',
    public_repos: 10,
    followers: 100,
    following: 50,
  },
};
