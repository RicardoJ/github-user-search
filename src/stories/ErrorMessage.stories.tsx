import ErrorMessage from '../components/ErrorMessage';
import { Meta, StoryFn } from '@storybook/react';
import { ErrorMessageProps } from '../types';
import '../githubUserSearch.css';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
} as Meta;

const Template: StoryFn<ErrorMessageProps> = (args) => (
  <ErrorMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  error: 'Oops, something went wrong!',
};
