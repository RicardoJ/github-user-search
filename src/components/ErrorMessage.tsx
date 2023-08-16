import { Card, CardContent, Typography } from '@mui/material';
import { ErrorMessageProps } from '../types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <Card className='error-card'>
      <CardContent>
        <Typography color='error'>{error}</Typography>
      </CardContent>
    </Card>
  );
};

export default ErrorMessage;
