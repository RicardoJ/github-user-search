export interface UserData {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  bio: string | null;
  followers: number;
  public_repos: number;
  following: number;
}

export interface GitHubSearchHook {
  userData: UserData | null;
  error: string | null;
  fetchUserData: (username: string) => Promise<void>;
}

export interface UserStatsSectionProps {
  publicRepos: number;
  followers: number;
  following: number;
}

export interface UserInfoProps {
  userData: UserData;
}

export interface UserDetailsSectionProps {
  name: string;
  login: string;
  location: string;
  bio: string | null;
}

export interface SearchFormProps {
  onSearch: (username: string) => void;
}

export interface ErrorMessageProps {
  error: string | null;
}

export interface AvatarSectionProps {
  login: string;
  avatarUrl: string;
}
