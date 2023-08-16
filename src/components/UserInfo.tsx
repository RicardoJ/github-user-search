import { lazy, Suspense } from 'react';
import { Card, CardContent } from '@mui/material';
import { UserInfoProps } from '../types';

const AvatarSection = lazy(() => import('./AvatarSection'));
const UserDetailsSection = lazy(() => import('./UserDetailsSection'));
const UserStatsSection = lazy(() => import('./UserStatsSection'));
const renderLoader = () => <p>Loading</p>;

const UserInfo: React.FC<UserInfoProps> = ({ userData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <section>
        <Card
          className='user-card'
          sx={{ boxShadow: 'rgba(70, 96, 187, 0.2) 0px 16px 30px -10px' }}
        >
          <CardContent>
            <div className='user-info'>
              <div className='user-content'>
                <AvatarSection
                  login={userData.login}
                  avatarUrl={userData.avatar_url}
                />
                <div className='user-section'>
                  <UserDetailsSection
                    name={userData.name}
                    login={userData.login}
                    location={userData.location}
                    bio={userData.bio}
                  />

                  <UserStatsSection
                    publicRepos={userData.public_repos}
                    followers={userData.followers}
                    following={userData.following}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Suspense>
  );
};

export default UserInfo;
