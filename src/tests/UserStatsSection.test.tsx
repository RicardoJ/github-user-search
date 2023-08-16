import { render } from '@testing-library/react';
import UserStatsSection from '../components/UserStatsSection';

describe('UserStatsSection', () => {
  it('should renders user statistics correctly', () => {
    const userStats = {
      publicRepos: 10,
      followers: 100,
      following: 50,
    };

    const { getByText } = render(<UserStatsSection {...userStats} />);

    expect(getByText('Repos')).toBeInTheDocument();
    expect(getByText(userStats.publicRepos.toString())).toBeInTheDocument();

    expect(getByText('Followers')).toBeInTheDocument();
    expect(getByText(userStats.followers.toString())).toBeInTheDocument();

    expect(getByText('Following')).toBeInTheDocument();
    expect(getByText(userStats.following.toString())).toBeInTheDocument();
  });
});
