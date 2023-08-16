import { render } from '@testing-library/react';
import UserDetailsSection from '../components/UserDetailsSection';

describe('UserDetailsSection', () => {
  it('should renders user details correctly', () => {
    const name = 'John Doe';
    const login = 'john_doe';
    const location = 'New York';
    const bio = 'Software Engineer';

    const { getByText } = render(
      <UserDetailsSection
        name={name}
        login={login}
        location={location}
        bio={bio}
      />
    );

    expect(getByText(name)).toBeInTheDocument();
    const loginLink = getByText(`@${login}`);
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', `https://github.com/${login}`);
    expect(getByText(location)).toBeInTheDocument();
    expect(getByText(bio)).toBeInTheDocument();
  });

  it('should displays "No bio available" when bio is not provided', () => {
    const name = 'Janeth Smith';
    const login = 'janeth_smith';
    const location = 'Quito';

    const { getByText } = render(
      <UserDetailsSection
        name={name}
        login={login}
        location={location}
        bio={null}
      />
    );

    expect(getByText('No bio available')).toBeInTheDocument();
  });
});
