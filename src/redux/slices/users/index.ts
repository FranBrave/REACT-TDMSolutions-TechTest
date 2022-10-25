import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';

import axios from 'utils/axios';
import { Thunk } from 'redux/store';
import { User } from 'interfaces';

const initialState: User = {
  email: 'string',
  first_name: 'string',
  last_name: 'string',
  avatar: 'string'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.first_name = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.last_name = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    }
  }
});

export const { setEmail, setFirstName, setLastName, setAvatar } =
  userSlice.actions;
export default userSlice.reducer;

export const user =
  (data: User): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    try {
      const response: AxiosResponse = await axios.get(
        '/users?page=1&per_page=6'
      );
      dispatch(setEmail(response.data.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    }
  };
