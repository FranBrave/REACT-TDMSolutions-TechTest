import { SettingsState } from './../redux/slices/settings/index';
export interface User {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  id: number;
}

export interface Login {
  username?: string;
  email: string;
  password: string;
}

export interface AuthState {
  accessToken: string | boolean;
  isLoading: boolean;
}

export interface GlobalState {
  auth: AuthState;
  settings: SettingsState;
}
