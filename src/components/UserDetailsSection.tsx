import { Typography } from '@mui/material';
import { UserDetailsSectionProps } from '../types';
import { GITHUB_URL } from '../constants';

const UserDetailsSection: React.FC<UserDetailsSectionProps> = ({
  name,
  login,
  location,
  bio,
}) => {
  return (
    <div className='user-details'>
      <Typography variant='h5'>{name}</Typography>
      <Typography component='span'>
        <a
          href={`${GITHUB_URL}${login}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          @{login}
        </a>
      </Typography>
      <Typography component='span'>{location}</Typography>
      <Typography component='span'>{bio ? bio : 'No bio available'}</Typography>
    </div>
  );
};

export default UserDetailsSection;
