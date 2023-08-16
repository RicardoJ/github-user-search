import { Avatar } from '@mui/material';
import { AvatarSectionProps } from '../types';

const AvatarSection: React.FC<AvatarSectionProps> = ({ login, avatarUrl }) => {
  return (
    <Avatar
      alt={login}
      src={avatarUrl}
      sx={{ width: '8rem', height: '8rem' }}
    />
  );
};

export default AvatarSection;
