import { render, waitFor } from '@testing-library/react';
import UserInfo from '../components/UserInfo';

describe('UserInfo', () => {
  it('should renders user information correctly', async () => {
    const userData = {
      login: 'john_doe',
      avatar_url: 'https://example.com/avatar.jpg',
      name: 'John Doe',
      location: 'New York',
      bio: 'Software Engineer',
      public_repos: 10,
      followers: 100,
      following: 50,
    };

    const { getByText, getByAltText } = render(
      <UserInfo userData={userData} />
    );

    await waitFor(() => {
      expect(() => getByText('Loading')).toThrow();
    });

    expect(getByAltText(userData.login)).toBeInTheDocument();
    expect(getByText(userData.name)).toBeInTheDocument();
    expect(getByText(`@${userData.login}`)).toBeInTheDocument();
    expect(getByText(userData.location)).toBeInTheDocument();
    expect(getByText(userData.bio)).toBeInTheDocument();
    expect(getByText(userData.public_repos)).toBeInTheDocument();
    expect(getByText(userData.followers)).toBeInTheDocument();
    expect(getByText(userData.following)).toBeInTheDocument();
  });
});
