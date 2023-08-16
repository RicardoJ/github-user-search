import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { SearchFormProps } from '../types';

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form className='input-container' onSubmit={handleSubmit}>
      <TextField
        label='Enter GitHub Username'
        variant='outlined'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input-field'
      />
      <Button
        variant='contained'
        color='primary'
        className='search-button'
        type='submit'
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
