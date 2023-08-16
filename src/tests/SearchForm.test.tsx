import { render, fireEvent } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  it('should calls onSearch when form is submitted with a username', () => {
    const mockOnSearch = jest.fn();
    const { getByLabelText, getByText } = render(
      <SearchForm onSearch={mockOnSearch} />
    );

    const input = getByLabelText('Enter GitHub Username');
    const username = 'john_doe';
    fireEvent.change(input, { target: { value: username } });

    const searchButton = getByText('Search');
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith(username);
  });
});
