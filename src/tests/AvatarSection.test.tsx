import { render } from '@testing-library/react';
import AvatarSection from '../components/AvatarSection';

describe('AvatarSection', () => {
  it('should renders the Avatar with correct props', () => {
    const login = 'john_doe';
    const avatarUrl = 'https://example.com/avatar.jpg';

    const { getByAltText } = render(
      <AvatarSection login={login} avatarUrl={avatarUrl} />
    );

    const avatarImage = getByAltText(login);
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', avatarUrl);
  });
});
