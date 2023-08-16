import { Typography } from '@mui/material';
import { UserStatsSectionProps } from '../types';

const UserStatsSection: React.FC<UserStatsSectionProps> = ({
  publicRepos,
  followers,
  following,
}) => {
  return (
    <div className='user-stats'>
      <li className='stat'>
        <Typography component='span'>Repos</Typography>
        <Typography component='strong'>{publicRepos}</Typography>
      </li>
      <li className='stat'>
        <Typography component='span'>Followers</Typography>
        <Typography component='strong'>{followers}</Typography>
      </li>
      <li className='stat'>
        <Typography component='span'>Following</Typography>
        <Typography component='strong'>{following}</Typography>
      </li>
    </div>
  );
};

export default UserStatsSection;
