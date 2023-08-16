import { render } from '@testing-library/react';
import ErrorMessage from '../components/ErrorMessage';

describe('ErrorMessage', () => {
  it('should renders the error message correctly', () => {
    const error = 'An error occurred';
    const { getByText } = render(<ErrorMessage error={error} />);
    const errorMessage = getByText(error);
    expect(errorMessage).toBeInTheDocument();
  });
});
