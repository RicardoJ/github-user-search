import { useState, useCallback } from 'react';
import axios from 'axios';
import { GITHUB_API_URL } from '../constants';
import { GitHubSearchHook, UserData } from '../types';

export const useGitHubSearch = (): GitHubSearchHook => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = useCallback(async (username: string) => {
    try {
      setError(null);
      if (!username) {
        setError('Enter a user name to search.');
        setUserData(null);
        return;
      }

      const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      setError('Oops, user not found. Try another name.');
      setUserData(null);
    }
  }, []);

  return { userData, error, fetchUserData };
};
