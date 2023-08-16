import SearchForm from '../components/SearchForm';
import { Meta, StoryFn } from '@storybook/react';
import { SearchFormProps } from '../types';
import '../githubUserSearch.css';

export default {
  component: SearchForm,
  title: 'Components/SearchForm',
} as Meta;

const Template: StoryFn<SearchFormProps> = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: (username) => console.log('Search clicked:', username),
};
