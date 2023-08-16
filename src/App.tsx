import { lazy, Suspense } from 'react';
import { Typography } from '@mui/material';
import './githubUserSearch.css';
import { useGitHubSearch } from './hooks/useGitHubSearch';

const ErrorMessage = lazy(() => import('./components/ErrorMessage'));
const SearchForm = lazy(() => import('./components/SearchForm'));
const UserInfo = lazy(() => import('./components/UserInfo'));

const App: React.FC = () => {
  const { userData, error, fetchUserData } = useGitHubSearch();

  return (
    <main className='container'>
      <header>
        <Typography variant='h4'>GitHub User Search</Typography>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <SearchForm onSearch={fetchUserData} />
        {error && <ErrorMessage error={error} />}
        {userData && <UserInfo userData={userData} />}
      </Suspense>
    </main>
  );
};

export default App;
