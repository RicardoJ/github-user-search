import axios from 'axios';
import { GITHUB_API_URL } from '../constants';
import { UserData } from '../types';

export const getGitHubUser = async (username: string): Promise<UserData> => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
